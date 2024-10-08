declare namespace kintone.types {
  interface Fields {
    機種コード下3桁: kintone.fieldTypes.SingleLineText;
    区分: kintone.fieldTypes.SingleLineText;
    機種コード: kintone.fieldTypes.SingleLineText;
    機械区分: kintone.fieldTypes.DropDown;
    営業CD: kintone.fieldTypes.SingleLineText;
    DV黒モード: kintone.fieldTypes.SingleLineText;
    機種: kintone.fieldTypes.SingleLineText;
    シリアルNO下6桁: kintone.fieldTypes.SingleLineText;
    MIFID判定: kintone.fieldTypes.SingleLineText;
    階数: kintone.fieldTypes.SingleLineText;
    設置日: kintone.fieldTypes.Date;
    経月: kintone.fieldTypes.SingleLineText;
    MIFID採番: kintone.fieldTypes.SingleLineText;
    A_MIFID: kintone.fieldTypes.SingleLineText;
    保守区分: kintone.fieldTypes.SingleLineText;
    シリアルNo: kintone.fieldTypes.SingleLineText;
    文字列__1行_: kintone.fieldTypes.SingleLineText;
    ふりがな: kintone.fieldTypes.SingleLineText;
    A_顧客名: kintone.fieldTypes.SingleLineText;
    最終更新日: kintone.fieldTypes.SingleLineText;
    担当CE: kintone.fieldTypes.SingleLineText;
    CECD: kintone.fieldTypes.SingleLineText;
    経過基準日: kintone.fieldTypes.Date;
    A_事業所ID: kintone.fieldTypes.SingleLineText;
    採番: kintone.fieldTypes.SingleLineText;
    部署名: kintone.fieldTypes.SingleLineText;
    DV平均: kintone.fieldTypes.SingleLineText;
    DVカラー: kintone.fieldTypes.SingleLineText;
    FB業務委託区分: kintone.fieldTypes.SingleLineText;
    契約満了日: kintone.fieldTypes.SingleLineText;
    設置日＿BK: kintone.fieldTypes.SingleLineText;
    担当営業: kintone.fieldTypes.SingleLineText;
    撤収日: kintone.fieldTypes.SingleLineText;
    提案対象MIF区分: kintone.fieldTypes.Calc;
    UTMウオッチガード数: kintone.fieldTypes.Calc;
    設置年: kintone.fieldTypes.Calc;
    経過月: kintone.fieldTypes.Calc;
    RISOリングラフ数: kintone.fieldTypes.Calc;
    基準年: kintone.fieldTypes.Calc;
    RISOオルフィス数: kintone.fieldTypes.Calc;
    設置月: kintone.fieldTypes.Calc;
    数量: kintone.fieldTypes.Calc;
    NAS数: kintone.fieldTypes.Calc;
    FBMIF件数: kintone.fieldTypes.Calc;
    セレゾナ数: kintone.fieldTypes.Calc;
    FB複合機数: kintone.fieldTypes.Calc;
    基準月: kintone.fieldTypes.Calc;
    Canon大判機数: kintone.fieldTypes.Calc;
    UTMウオッチポイント数: kintone.fieldTypes.Calc;
    FBプリンタ数: kintone.fieldTypes.Calc;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    作成日時: kintone.fieldTypes.CreatedTime;
    更新日時: kintone.fieldTypes.UpdatedTime;
  }
}
