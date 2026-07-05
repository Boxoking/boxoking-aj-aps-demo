import React, { useState, useMemo } from "react";
import { Table, Button, Modal, Tag, Space, Tree, Input } from "antd";
import { UnorderedListOutlined, SearchOutlined } from "@ant-design/icons";
import { useSlurryMutexStore } from "../store/useSlurryMutexStore";
import type { SlurryMaterial, BOMItem, MaterialType } from "../types";

/* ── 递归构建 BOM 树结构 ── */
function buildBomTree(
  parentId: string,
  bomData: BOMItem[],
  leadTimes: { parentId: string; childSlurryId: string; leadShifts: number; leadRatio: number }[],
): { title: JSX.Element; key: string; children?: ReturnType<typeof buildBomTree> }[] {
  const children = bomData.filter((b) => b.parentId === parentId);
  return children.map((item) => {
    const color = item.childType === "浆料" ? "#16a34a" : "#2563eb";
    let leadTimeStr = "";
    if (item.childType === "浆料") {
      const lt = leadTimes.find((l) => l.parentId === parentId && l.childSlurryId === item.childId);
      if (lt) leadTimeStr = `（${lt.leadShifts}班次*${Math.round(lt.leadRatio * 100)}%）`;
    }
    const node: { title: JSX.Element; key: string; children?: ReturnType<typeof buildBomTree> } = {
      title: (
        <span style={{ color, fontWeight: 500 }}>
          【{item.childType}】{item.childName} *{item.usageKg}
          {leadTimeStr && <span style={{ color: "#ea580c", fontSize: 11 }}> {leadTimeStr}</span>}
        </span>
      ),
      key: `${item.childId}-${item.parentId}`,
    };
    if (item.childType === "浆料") {
      const subChildren = buildBomTree(item.childId, bomData, leadTimes);
      if (subChildren.length > 0) node.children = subChildren;
    }
    return node;
  });
}

const SlurryArchivePage: React.FC = () => {
  const store = useSlurryMutexStore();
  const [selectedMaterial, setSelectedMaterial] = useState<SlurryMaterial | null>(null);
  const [bomModalOpen, setBomModalOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const filteredMaterials = useMemo(() =>
    store.materials.filter((m) =>
      !searchText || m.productName.includes(searchText) || m.productId.includes(searchText)
    ), [store.materials, searchText]);

  const columns = [
    { title: "产品名", dataIndex: "productName", key: "productName", width: 160 },
    { title: "产品号", dataIndex: "productId", key: "productId", width: 100 },
    {
      title: "物料类型",
      dataIndex: "materialType",
      key: "materialType",
      width: 70,
      render: (t: MaterialType) => (
        <Tag color={t === "浆料" ? "green" : "blue"}>{t}</Tag>
      ),
    },
    {
      title: "净重",
      dataIndex: "netWeight",
      key: "netWeight",
      width: 80,
      align: "right" as const,
    },
    {
      title: "毛重",
      dataIndex: "grossWeight",
      key: "grossWeight",
      width: 80,
      align: "right" as const,
    },
    { title: "单位", dataIndex: "unit", key: "unit", width: 60 },
  ];

  const treeData = selectedMaterial
    ? buildBomTree(selectedMaterial.productId, store.bomData, store.leadTimes)
    : [];

  return (
    <div className="page-container">
      <div className="page-header">浆料档案</div>

      {/* 菜单栏 — sticky */}
      <div style={{ position: "sticky", top: 0, zIndex: 10,
        display: "flex", alignItems: "center", gap: 8,
        padding: "6px 12px", marginBottom: 8,
        background: "#fff", border: "1px solid #e8e8e8", borderRadius: 6 }}>
        <Input size="small" placeholder="搜索名称/编号..." prefix={<SearchOutlined />}
          style={{ width: 200 }} value={searchText} onChange={(e) => setSearchText(e.target.value)} allowClear />
        <Button icon={<UnorderedListOutlined />} disabled={!selectedMaterial}
          onClick={() => setBomModalOpen(true)}>BOM</Button>
        <span style={{ fontSize: 11, color: "#999", marginLeft: "auto" }}>
          {selectedMaterial ? `已选：${selectedMaterial.productName}` : "点击行选择物料后可查看BOM"}
        </span>
      </div>

      {/* 物料列表 */}
      <Table
        dataSource={filteredMaterials}
        columns={columns}
        rowKey="productId"
        size="small"
        pagination={false}
        onRow={(record) => ({
          onClick: () => setSelectedMaterial(record),
          style: {
            background: selectedMaterial?.productId === record.productId ? "#dcfce7" : undefined,
            cursor: "pointer",
          },
        })}
      />

      {/* BOM 结构弹窗 */}
      <Modal
        title={
          selectedMaterial
            ? `${selectedMaterial.productName} — BOM结构`
            : "BOM结构"
        }
        open={bomModalOpen}
        onCancel={() => setBomModalOpen(false)}
        footer={null}
        width={520}
      >
        {treeData.length > 0 ? (
          <Tree
            treeData={treeData}
            defaultExpandAll
            showLine={{ showLeafIcon: false }}
          />
        ) : (
          <div style={{ textAlign: "center", color: "#999", padding: 24 }}>
            暂无 BOM 数据
          </div>
        )}
      </Modal>
    </div>
  );
};

export default SlurryArchivePage;
