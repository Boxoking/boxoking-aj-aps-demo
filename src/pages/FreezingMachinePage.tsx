import React, { useState, useMemo } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, Select, Space, Popconfirm, Tag, message } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMasterDataStore } from "../store/useMasterDataStore";
import type { FreezingMachine, FreezingSpeed, MachineStatus } from "../types";

const { Option } = Select;

const FreezingMachinePage: React.FC = () => {
  const store = useMasterDataStore();
  const [selectedMachine, setSelectedMachine] = useState<FreezingMachine | null>(null);
  const [selectedSpeed, setSelectedSpeed] = useState<FreezingSpeed | null>(null);
  const [machineModalOpen, setMachineModalOpen] = useState(false);
  const [speedModalOpen, setSpeedModalOpen] = useState(false);
  const [editingMachine, setEditingMachine] = useState<FreezingMachine | null>(null);
  const [editingSpeed, setEditingSpeed] = useState<FreezingSpeed | null>(null);
  const [machineForm] = Form.useForm();
  const [speedForm] = Form.useForm();
  const [leftWidth, setLeftWidth] = useState(520);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const draggingRef = React.useRef(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!draggingRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const w = e.clientX - rect.left;
      setLeftWidth(Math.min(600, Math.max(280, w)));
    };
    const handleMouseUp = () => {
      draggingRef.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const [machineSearch, setMachineSearch] = useState("");
  const [speedSearch, setSpeedSearch] = useState("");

  const filteredMachines = useMemo(() =>
    store.freezingMachines.filter((m) =>
      !machineSearch || m.machineName.includes(machineSearch) || m.machineId.includes(machineSearch)
    ), [store.freezingMachines, machineSearch]);

  const selectedSpeeds = store.freezingSpeeds.filter(
    (s) => s.machineId === selectedMachine?.machineId
  );
  const filteredSpeeds = useMemo(() =>
    selectedSpeeds.filter((s) =>
      !speedSearch || s.productName.includes(speedSearch) || s.productId.includes(speedSearch)
    ), [selectedSpeeds, speedSearch]);

  const handleAddMachine = () => {
    setEditingMachine(null);
    machineForm.resetFields();
    setMachineModalOpen(true);
  };

  const handleEditMachine = (record: FreezingMachine) => {
    setEditingMachine(record);
    machineForm.setFieldsValue(record);
    setMachineModalOpen(true);
  };

  const handleSaveMachine = () => {
    machineForm.validateFields().then(() => {
      message.success("机台已保存");
      setMachineModalOpen(false);
    });
  };

  const handleAddSpeed = () => {
    setEditingSpeed(null);
    speedForm.resetFields();
    speedForm.setFieldsValue({ machineId: selectedMachine?.machineId, machineName: selectedMachine?.machineName });
    setSpeedModalOpen(true);
  };

  const handleEditSpeed = (record: FreezingSpeed) => {
    setEditingSpeed(record);
    speedForm.setFieldsValue(record);
    setSpeedModalOpen(true);
  };

  const handleSaveSpeed = () => {
    message.success("速度数据已保存");
    setSpeedModalOpen(false);
  };

  const handleDeleteMachine = (id: string) => {
    store.deleteFreezingMachine(id);
    setSelectedMachine(null);
    message.success("机台已删除");
  };

  const handleDeleteSpeed = (id: string) => {
    store.deleteFreezingSpeed(id);
    setSelectedSpeed(null);
    message.success("速度数据已删除");
  };

  const machineColumns = [
    { title: "机台编号", dataIndex: "machineId", key: "machineId", width: 100 },
    { title: "名称", dataIndex: "machineName", key: "machineName", width: 140 },
    { title: "所在车间", dataIndex: "workshopName", key: "workshopName", width: 100 },
    { title: "数量", dataIndex: "quantity", key: "quantity", width: 60 },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      width: 80,
      render: (s: MachineStatus) => (
        <Tag color={s === "可用" ? "green" : s === "维护" ? "orange" : "red"}>{s}</Tag>
      ),
    },
    {
      title: "操作",
      key: "actions",
      width: 100,
      render: (_: unknown, record: FreezingMachine) => (
        <Space size="small">
          <Button size="small" icon={<EditOutlined />} onClick={() => handleEditMachine(record)} />
          <Popconfirm title="确定删除？">
            <Button size="small" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const speedColumns = [
    { title: "产品名", dataIndex: "productName", key: "productName", width: 160 },
    { title: "产品编号", dataIndex: "productId", key: "productId", width: 110 },
    { title: "速冻机台", dataIndex: "machineName", key: "machineName", width: 120 },
    { title: "白班产能", dataIndex: "dayCapacity", key: "dayCapacity", width: 80 },
    { title: "晚班产能", dataIndex: "nightCapacity", key: "nightCapacity", width: 80 },
    { title: "主制车间", dataIndex: "mainWorkshop", key: "mainWorkshop", width: 80,
      render: (v: string) => store.workshops.find((w) => w.workshopId === v)?.workshopName || v,
    },
    {
      title: "操作",
      key: "actions",
      width: 100,
      render: (_: unknown, record: FreezingSpeed) => (
        <Space size="small">
          <Button size="small" icon={<EditOutlined />} onClick={() => handleEditSpeed(record)} />
          <Popconfirm title="确定删除？">
            <Button size="small" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  // 计算列宽
  const machineColsWidth = 100 + 140 + 100 + 60 + 80 + 100;
  const speedColsWidth = 160 + 110 + 120 + 80 + 80 + 80 + 100;

  return (
    <div ref={containerRef} style={{ height: "100%", display: "flex", gap: 4, padding: 16, overflow: "hidden" }}>
      {/* 左侧：速冻机台列表 */}
      <div style={{ width: leftWidth, minWidth: leftWidth, background: "#fff", borderRadius: 6, padding: 12, border: "1px solid #e8e8e8", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, flexShrink: 0 }}>
          <span style={{ fontWeight: 600, fontSize: 15, color: "#16a34a" }}>速冻机台</span>
          <Space size={4}>
            <Input size="small" placeholder="搜索机台..." prefix={<SearchOutlined />} style={{ width: 130 }}
              value={machineSearch} onChange={(e) => setMachineSearch(e.target.value)} allowClear />
            <Button type="primary" size="small" icon={<PlusOutlined />} onClick={handleAddMachine}>新建</Button>
            <Button size="small" icon={<EditOutlined />} disabled={!selectedMachine} onClick={() => { if (selectedMachine) handleEditMachine(selectedMachine); }}>修改</Button>
            <Button size="small" danger icon={<DeleteOutlined />} disabled={!selectedMachine} onClick={() => { if (selectedMachine) handleDeleteMachine(selectedMachine.machineId); }}>删除</Button>
          </Space>
        </div>
        <div style={{ flex: 1, overflow: "scroll", minHeight: 0 }}>
          <Table
            dataSource={filteredMachines}
            columns={machineColumns}
            rowKey="machineId"
            size="small"
            pagination={false}
            scroll={{ x: machineColsWidth }}
            onRow={(record) => ({
              onClick: () => setSelectedMachine(record),
              style: {
                background: selectedMachine?.machineId === record.machineId ? "#dcfce7" : undefined,
                cursor: "pointer",
              },
            })}
          />
        </div>
      </div>

      {/* 左右拖拽分隔线 */}
      <div
        onMouseDown={(e) => { e.preventDefault(); draggingRef.current = true; document.body.style.cursor = "col-resize"; document.body.style.userSelect = "none"; }}
        style={{ width: 5, cursor: "col-resize", flexShrink: 0, background: "transparent", borderRadius: 3 }}
        onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "#16a34a"; }}
        onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "transparent"; }}
      />

      {/* 右侧：品相速冻速度 */}
      <div style={{ flex: 1, background: "#fff", borderRadius: 6, padding: 12, border: "1px solid #e8e8e8", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, flexShrink: 0 }}>
          <span style={{ fontWeight: 600, fontSize: 15 }}>
            {selectedMachine ? `${selectedMachine.machineName} — 可处理品相` : "请选择机台"}
          </span>
          {selectedMachine && (
            <Space size={4}>
              <Input size="small" placeholder="搜索品相..." prefix={<SearchOutlined />} style={{ width: 130 }}
                value={speedSearch} onChange={(e) => setSpeedSearch(e.target.value)} allowClear />
              <Button size="small" icon={<PlusOutlined />} onClick={handleAddSpeed}>新增品相</Button>
              <Button size="small" icon={<EditOutlined />} disabled={!selectedSpeed} onClick={() => { if (selectedSpeed) handleEditSpeed(selectedSpeed); }}>修改</Button>
              <Button size="small" danger icon={<DeleteOutlined />} disabled={!selectedSpeed} onClick={() => { if (selectedSpeed) handleDeleteSpeed(selectedSpeed.id); }}>删除</Button>
            </Space>
          )}
        </div>
        <div style={{ flex: 1, overflow: "scroll", minHeight: 0 }}>
          <Table
            dataSource={filteredSpeeds}
            columns={speedColumns}
            rowKey="id"
            size="small"
            pagination={false}
            scroll={{ x: speedColsWidth }}
            onRow={(record) => ({
              onClick: () => setSelectedSpeed(record),
              style: { background: selectedSpeed?.id === record.id ? "#dcfce7" : undefined, cursor: "pointer" },
            })}
          />
        </div>
      </div>

      <Modal
        title={editingMachine ? "修改速冻机台" : "新建速冻机台"}
        open={machineModalOpen}
        onOk={handleSaveMachine}
        onCancel={() => setMachineModalOpen(false)}
      >
        <Form form={machineForm} layout="vertical" size="small">
          <Form.Item name="machineName" label="名称" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="workshopId" label="所在车间">
            <Select>
              {store.workshops.map((w) => (
                <Option key={w.workshopId} value={w.workshopId}>{w.workshopName}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="workshopName" label="车间名称" hidden><Input /></Form.Item>
          <Form.Item name="quantity" label="数量">
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="status" label="状态" initialValue="可用">
            <Select>
              <Option value="可用">可用</Option>
              <Option value="维护">维护</Option>
              <Option value="停用">停用</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title={editingSpeed ? "修改速冻速度" : "新增品相速冻速度"}
        open={speedModalOpen}
        onOk={handleSaveSpeed}
        onCancel={() => setSpeedModalOpen(false)}
      >
        <Form form={speedForm} layout="vertical" size="small">
          <Form.Item name="productId" label="产品编号">
            <Select showSearch optionFilterProp="children">
              {store.products.map((p) => (
                <Option key={p.productId} value={p.productId}>{p.productId} — {p.productName}</Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="productName" label="产品名" hidden><Input /></Form.Item>
          <Form.Item name="machineId" label="速冻机台" hidden><Input /></Form.Item>
          <Form.Item name="machineName" label="速冻机台名称" hidden><Input /></Form.Item>
          <Space>
            <Form.Item name="dayCapacity" label="白班产能">
              <InputNumber min={1} />
            </Form.Item>
            <Form.Item name="nightCapacity" label="晚班产能">
              <InputNumber min={1} />
            </Form.Item>
          </Space>
          <Form.Item name="mainWorkshop" label="主制车间">
            <Select>
              {store.workshops.map((w) => (
                <Option key={w.workshopId} value={w.workshopId}>{w.workshopName}</Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FreezingMachinePage;
