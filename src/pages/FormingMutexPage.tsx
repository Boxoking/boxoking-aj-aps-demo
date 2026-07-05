import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Select, Space, Popconfirm, Tag, message } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSlurryMutexStore } from "../store/useSlurryMutexStore";
import { useMasterDataStore } from "../store/useMasterDataStore";
import type { MutexGroup, MutexGroupItem, MutexType } from "../types";

const { Option } = Select;

const FormingMutexPage: React.FC = () => {
  const store = useSlurryMutexStore();
  const masterStore = useMasterDataStore();
  const [selectedWSGroup, setSelectedWSGroup] = useState<MutexGroup | null>(null);
  const [selectedMCGroup, setSelectedMCGroup] = useState<MutexGroup | null>(null);
  const [activeType, setActiveType] = useState<MutexType>("车间互斥");
  const [groupModalOpen, setGroupModalOpen] = useState(false);
  const [itemModalOpen, setItemModalOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<MutexGroup | null>(null);
  const [editingItem, setEditingItem] = useState<{ groupId: string; productId: string } | null>(null);
  const [groupForm] = Form.useForm();
  const [itemForm] = Form.useForm();

  const wsGroups = store.mutexGroups.filter((g) => g.mutexType === "车间互斥");
  const mcGroups = store.mutexGroups.filter((g) => g.mutexType === "机台互斥");

  // 根据当前活跃类型决定右侧显示哪个组的品相
  const activeGroup = activeType === "车间互斥" ? selectedWSGroup : selectedMCGroup;
  const activeItems = activeGroup ? store.mutexItems.filter((i) => i.groupId === activeGroup.groupId) : [];

  const handleSelectWS = (record: MutexGroup) => {
    setSelectedWSGroup(record);
    setSelectedMCGroup(null);
    setActiveType("车间互斥");
  };

  const handleSelectMC = (record: MutexGroup) => {
    setSelectedMCGroup(record);
    setSelectedWSGroup(null);
    setActiveType("机台互斥");
  };

  /* ── CRUD ── */
  const handleAddGroup = (mutexType: MutexType) => {
    setEditingGroup(null);
    groupForm.resetFields();
    groupForm.setFieldsValue({ mutexType });
    setGroupModalOpen(true);
  };

  const handleEditGroup = (record: MutexGroup) => {
    setEditingGroup(record);
    groupForm.setFieldsValue(record);
    setGroupModalOpen(true);
  };

  const handleSaveGroup = () => {
    groupForm.validateFields().then((values) => {
      if (editingGroup) {
        store.updateMutexGroup(editingGroup.groupId, values);
        message.success("已更新");
      } else {
        store.addMutexGroup({ ...values } as MutexGroup);
        message.success("已添加");
      }
      setGroupModalOpen(false);
    });
  };

  const handleDeleteGroup = (groupId: string) => {
    store.deleteMutexGroup(groupId);
    if (selectedWSGroup?.groupId === groupId) setSelectedWSGroup(null);
    if (selectedMCGroup?.groupId === groupId) setSelectedMCGroup(null);
    message.success("已删除");
  };

  const handleAddItem = () => {
    if (!activeGroup) { message.warning("请先选择互斥组"); return; }
    setEditingItem(null);
    itemForm.resetFields();
    itemForm.setFieldsValue({ groupId: activeGroup.groupId });
    setItemModalOpen(true);
  };

  const handleEditItem = (record: MutexGroupItem) => {
    setEditingItem({ groupId: record.groupId, productId: record.productId });
    itemForm.setFieldsValue(record);
    setItemModalOpen(true);
  };

  const handleSaveItem = () => {
    itemForm.validateFields().then((values) => {
      const product = masterStore.products.find((p) => p.productId === values.productId);
      const item: MutexGroupItem = {
        groupId: values.groupId,
        productId: values.productId,
        productName: product?.productName || "",
      };
      if (editingItem) {
        const idx = store.mutexItems.findIndex(
          (m) => m.groupId === editingItem.groupId && m.productId === editingItem.productId
        );
        if (idx !== -1) store.updateMutexItem(idx, item);
        message.success("已更新");
      } else {
        store.addMutexItem(item);
        message.success("已添加");
      }
      setItemModalOpen(false);
    });
  };

  const handleDeleteItem = (record: MutexGroupItem) => {
    const idx = store.mutexItems.findIndex(
      (m) => m.groupId === record.groupId && m.productId === record.productId
    );
    if (idx !== -1) { store.deleteMutexItem(idx); message.success("已删除"); }
  };

  const groupColumns = [
    { title: "编号", dataIndex: "groupId", key: "groupId", width: 110 },
    { title: "名称", dataIndex: "groupName", key: "groupName", width: 160 },
    { title: "操作", key: "actions", width: 100, render: (_: unknown, record: MutexGroup) => (
      <Space size="small">
        <Button size="small" icon={<EditOutlined />} onClick={(e) => { e.stopPropagation(); handleEditGroup(record); }} />
        <Popconfirm title="确定删除？" onConfirm={() => handleDeleteGroup(record.groupId)}>
          <Button size="small" danger icon={<DeleteOutlined />} onClick={(e) => e.stopPropagation()} />
        </Popconfirm>
      </Space>
    )},
  ];

  const itemColumns = [
    { title: "产品编号", dataIndex: "productId", key: "productId", width: 130 },
    { title: "产品名称", dataIndex: "productName", key: "productName", width: 180 },
    { title: "操作", key: "actions", width: 100, render: (_: unknown, record: MutexGroupItem) => (
      <Space size="small">
        <Button size="small" icon={<EditOutlined />} onClick={() => handleEditItem(record)} />
        <Popconfirm title="确定删除？" onConfirm={() => handleDeleteItem(record)}>
          <Button size="small" danger icon={<DeleteOutlined />} />
        </Popconfirm>
      </Space>
    )},
  ];

  const groupColsW = 110 + 160 + 100;
  const itemColsW = 130 + 180 + 100;

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "8px 12px", overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 8, flexShrink: 0 }}>
        <span style={{ fontWeight: 600, fontSize: 15, color: "#16a34a" }}>成型互斥</span>
      </div>

      <div style={{ flex: 1, display: "flex", minHeight: 0, gap: 12 }}>
        {/* 左侧：上下两个互斥组表格 */}
        <div style={{ width: 420, display: "flex", flexDirection: "column", gap: 12 }}>
          {/* 车间互斥组 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#fff", borderRadius: 6, border: "1px solid #e8e8e8", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid #e8e8e8", flexShrink: 0, background: "#fafafa" }}>
              <span style={{ fontWeight: 600, fontSize: 13, color: "#16a34a" }}>车间互斥组</span>
              <Button size="small" icon={<PlusOutlined />} onClick={() => handleAddGroup("车间互斥")}>新建</Button>
            </div>
            <div style={{ flex: 1, overflow: "scroll", minHeight: 0 }}>
              <Table dataSource={wsGroups} columns={groupColumns} rowKey="groupId" size="small" pagination={false}
                scroll={{ x: groupColsW }}
                onRow={(r) => ({ onClick: () => handleSelectWS(r), style: { background: activeType === "车间互斥" && selectedWSGroup?.groupId === r.groupId ? "#dcfce7" : undefined, cursor: "pointer" } })} />
            </div>
          </div>
          {/* 机台互斥组 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#fff", borderRadius: 6, border: "1px solid #e8e8e8", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid #e8e8e8", flexShrink: 0, background: "#fafafa" }}>
              <span style={{ fontWeight: 600, fontSize: 13, color: "#16a34a" }}>机台互斥组</span>
              <Button size="small" icon={<PlusOutlined />} onClick={() => handleAddGroup("机台互斥")}>新建</Button>
            </div>
            <div style={{ flex: 1, overflow: "scroll", minHeight: 0 }}>
              <Table dataSource={mcGroups} columns={groupColumns} rowKey="groupId" size="small" pagination={false}
                scroll={{ x: groupColsW }}
                onRow={(r) => ({ onClick: () => handleSelectMC(r), style: { background: activeType === "机台互斥" && selectedMCGroup?.groupId === r.groupId ? "#dcfce7" : undefined, cursor: "pointer" } })} />
            </div>
          </div>
        </div>

        {/* 右侧：组内品相（跟随选中变化） */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", background: "#fff", borderRadius: 6, border: "1px solid #e8e8e8", overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", borderBottom: "1px solid #e8e8e8", flexShrink: 0, background: "#fafafa" }}>
            <span style={{ fontWeight: 600, fontSize: 13 }}>
              {activeGroup ? `${activeGroup.groupName} — 组内品相（${activeType}）` : "请选择互斥组"}
            </span>
            {activeGroup && (
              <Button size="small" icon={<PlusOutlined />} onClick={handleAddItem}>新增品相</Button>
            )}
          </div>
          <div style={{ flex: 1, overflow: "scroll", minHeight: 0 }}>
            <Table dataSource={activeItems} columns={itemColumns} rowKey={(r) => `${r.groupId}-${r.productId}`}
              size="small" pagination={false} scroll={{ x: itemColsW }} />
          </div>
        </div>
      </div>

      {/* 弹窗 */}
      <Modal title={editingGroup ? "修改互斥组" : "新建互斥组"} open={groupModalOpen} onOk={handleSaveGroup} onCancel={() => setGroupModalOpen(false)}>
        <Form form={groupForm} layout="vertical" size="small">
          <Form.Item name="mutexType" label="互斥类型" rules={[{ required: true }]}>
            <Select><Option value="车间互斥">车间互斥</Option><Option value="机台互斥">机台互斥</Option></Select>
          </Form.Item>
          <Form.Item name="groupId" label="互斥组编号" rules={[{ required: true }]}><Input /></Form.Item>
          <Form.Item name="groupName" label="互斥组名称" rules={[{ required: true }]}><Input /></Form.Item>
        </Form>
      </Modal>

      <Modal title={editingItem ? "修改组内品相" : "新增组内品相"} open={itemModalOpen} onOk={handleSaveItem} onCancel={() => setItemModalOpen(false)}>
        <Form form={itemForm} layout="vertical" size="small">
          <Form.Item name="groupId" label="互斥组编号" hidden><Input /></Form.Item>
          <Form.Item name="productId" label="产品" rules={[{ required: true }]}>
            <Select showSearch optionFilterProp="children" placeholder="搜索品相">
              {masterStore.products.map((p) => <Option key={p.productId} value={p.productId}>{p.productId} — {p.productName}</Option>)}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FormingMutexPage;
