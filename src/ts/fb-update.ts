import { KintoneRestAPIClient, KintoneRecordField } from "@kintone/rest-api-client";

// MIFマスタ:FB商談 = N : 1
// 外部キー事業所ID


(() => {
   "use strict";

    type MifData = {
        $id: KintoneRecordField.ID;
        $revision: KintoneRecordField.Revision;
        更新者: KintoneRecordField.Modifier;
        作成者: KintoneRecordField.Creator;
        レコード番号: KintoneRecordField.RecordNumber;
        更新日時: KintoneRecordField.UpdatedTime;
        作成日時: KintoneRecordField.CreatedTime;
        機種コード下3桁: KintoneRecordField.SingleLineText;
        区分: KintoneRecordField.SingleLineText;
        機種コード: KintoneRecordField.SingleLineText;
        機械区分: KintoneRecordField.Dropdown;
        営業CD: KintoneRecordField.SingleLineText;
        DV黒モード: KintoneRecordField.SingleLineText;
        機種: KintoneRecordField.SingleLineText;
        シリアルNO下6桁: KintoneRecordField.SingleLineText;
        MIFID判定: KintoneRecordField.SingleLineText;
        階数: KintoneRecordField.SingleLineText;
        設置日: KintoneRecordField.Date;
        経月: KintoneRecordField.SingleLineText;
        MIFID採番: KintoneRecordField.SingleLineText;
        A_MIFID: KintoneRecordField.SingleLineText;
        保守区分: KintoneRecordField.SingleLineText;
        シリアルNo: KintoneRecordField.SingleLineText;
        文字列__1行_: KintoneRecordField.SingleLineText;
        ふりがな: KintoneRecordField.SingleLineText;
        A_顧客名: KintoneRecordField.SingleLineText;
        最終更新日: KintoneRecordField.SingleLineText;
        担当CE: KintoneRecordField.SingleLineText;
        CECD: KintoneRecordField.SingleLineText;
        経過基準日: KintoneRecordField.Date;
        A_事業所ID: KintoneRecordField.SingleLineText;
        採番: KintoneRecordField.SingleLineText;
        部署名: KintoneRecordField.SingleLineText;
        DV平均: KintoneRecordField.SingleLineText;
        DVカラー: KintoneRecordField.SingleLineText;
        FB業務委託区分: KintoneRecordField.SingleLineText;
        契約満了日: KintoneRecordField.SingleLineText;
        設置日＿BK: KintoneRecordField.SingleLineText;
        担当営業: KintoneRecordField.SingleLineText;
        撤収日: KintoneRecordField.SingleLineText;
        提案対象MIF区分: KintoneRecordField.Calc;
        UTMウオッチガード数: KintoneRecordField.Calc;
        設置年: KintoneRecordField.Calc;
        経過月: KintoneRecordField.Calc;
        RISOリングラフ数: KintoneRecordField.Calc;
        基準年: KintoneRecordField.Calc;
        RISOオルフィス数: KintoneRecordField.Calc;
        設置月: KintoneRecordField.Calc;
        数量: KintoneRecordField.Calc;
        NAS数: KintoneRecordField.Calc;
        FBMIF件数: KintoneRecordField.Calc;
        セレゾナ数: KintoneRecordField.Calc;
        FB複合機数: KintoneRecordField.Calc;
        基準月: KintoneRecordField.Calc;
        Canon大判機数: KintoneRecordField.Calc;
        UTMウオッチポイント数: KintoneRecordField.Calc;
        FBプリンタ数: KintoneRecordField.Calc;
    }

    type FBData = {
        $id: KintoneRecordField.ID;
        $revision: KintoneRecordField.Revision;
        更新者: KintoneRecordField.Modifier;
        作成者: KintoneRecordField.Creator;
        レコード番号: KintoneRecordField.RecordNumber;
        更新日時: KintoneRecordField.UpdatedTime;
        作成日時: KintoneRecordField.CreatedTime;
        月: KintoneRecordField.Dropdown;
        ふりがな: KintoneRecordField.SingleLineText;
        A_顧客名: KintoneRecordField.SingleLineText;
        PP管理備考: KintoneRecordField.MultiLineText;
        最大値訪問日: KintoneRecordField.Number;
        A_事業所ID: KintoneRecordField.SingleLineText;
        年: KintoneRecordField.Dropdown;
        活動記録備考: KintoneRecordField.MultiLineText;
        MIF情報備考: KintoneRecordField.MultiLineText;
        計算用年: KintoneRecordField.Calc;
        台数: KintoneRecordField.Calc;
        集計終了年月: KintoneRecordField.Calc;
        最終訪問日: KintoneRecordField.Calc;
        集計開始年月: KintoneRecordField.Calc;
        MIF情報: KintoneRecordField.Subtable<{
            FB業務委託区分: KintoneRecordField.SingleLineText;
            機種: KintoneRecordField.SingleLineText;
            設置日: KintoneRecordField.SingleLineText;
            担当営業: KintoneRecordField.SingleLineText;
            MIF数量: KintoneRecordField.Number;
            区分: KintoneRecordField.SingleLineText;
            A_MIFID: KintoneRecordField.SingleLineText;
            担当CE: KintoneRecordField.SingleLineText;
            シリアルNo: KintoneRecordField.SingleLineText;
            経過月: KintoneRecordField.Number;
        }>;
        PP管理: KintoneRecordField.Subtable<{
            競合他社: KintoneRecordField.Dropdown;
            月度: KintoneRecordField.SingleLineText;
            確度: KintoneRecordField.SingleLineText;
            数量: KintoneRecordField.Number;
            担当者CD: KintoneRecordField.SingleLineText;
            着地見込ギャップフィル: KintoneRecordField.SingleLineText;
            予定機種_物品: KintoneRecordField.SingleLineText;
            進捗ランク: KintoneRecordField.Dropdown;

            担当者名: KintoneRecordField.UserSelect;
        }>;
        活動記録: KintoneRecordField.Subtable<{
            訪問日: KintoneRecordField.Date;
            訪問日展開: KintoneRecordField.Number;
            案件名: KintoneRecordField.SingleLineText;
            訪問結果: KintoneRecordField.SingleLineText;

            担当者: KintoneRecordField.UserSelect;
        }>;
    }


   const FB_APP_ID = 1130;

   interface KintoneEvent {
    record: kintone.types.SavedFields
   }
   
   kintone.events.on("app.record.index.show", (event: KintoneEvent) => {

        // ボタンが既に存在していないか確認
        if (document.getElementById('delete-all-mif-button') !== null) {
            return;
        }
        
        // ボタンを作成
        let deleteButton = document.createElement('button');
        deleteButton.id = 'delete-all-mif-button';
        deleteButton.innerHTML = '<span></span>FB商談アプリのMIF情報を更新';

        // ボタンをアプリの画面に追加
        const headerMenuSpaceElement = kintone.app.getHeaderMenuSpaceElement();

        if (!headerMenuSpaceElement) {
            alert("ヘッダー要素が取得できませんでした")
            return event;
        }

        headerMenuSpaceElement.appendChild(deleteButton);
        // ボタンがクリックされた時の処理
        deleteButton.addEventListener('click', async () => {
            if (confirm('すべてのレコードのMIF情報を更新してもよろしいですか？')) {

                try {

                    deleteButton.classList.add("click");
                    deleteButton.disabled = true;
                    deleteButton.innerHTML = "<span></span>MIF情報を更新中・・・";

                    // クライアントの作成
                    const client = new KintoneRestAPIClient();
                    // リクエストパラメータの設定
                    const APP_ID = kintone.app.getId();
                    
                    if (!APP_ID) {
                        throw new Error('アプリIDの取得中エラーが発生しました')
                    }

                    const getMifMasterParams = {
                        app: APP_ID,
                        query: '経過月 >= 48 and A_事業所ID != ""'
                    };
                    
                    // MIFマスタレコードの取得
                    const mifMaster48Resp = await client.record.getRecords<MifData>(getMifMasterParams);
                    
                    // FB商談において台数１台以上のレコードに対する操作。
                    // MIF情報サブテーブルの更新。または、削除

                    // FB商談において台数0台、かつ事業所_IDがMIF情報にも存在するレコードに対しての操作
                    // 経過月=48ヶ月のMIFマスタのレコードがあれば、MIF情報に追加。

                    // そもそもここで、事業所IDがMIFに存在するか知りたい。
                    const getFbParams = {
                        app: FB_APP_ID,
                        // query: '台数 >= 1'
                    };
                    
                    // FB商談アプリの情報を取得
                    // ここでFBレコードの型をつけたい
                    // const fbRecords = await client.record.getRecords<FBData>(getFbParams);
                    const startTime1 = performance.now();  // 開始時間を取得

                    const fbRecords: FBData[] = await client.record.getAllRecords(getFbParams);

                    const endTime1 = performance.now();    // 終了時間を取得
                    const elapsedTime = endTime1 - startTime1;  // 経過時間をミリ秒で計算

                    console.log("FB商談全レコード取得");

                    console.log(`取得の処理時間: ${elapsedTime} ms`);
                    
                    const updateRecords: any = fbRecords.map((fbRecord) => {
                         // MIFマスタのレコードと一致するA_事業所IDがあるかどうかを確認
                       
                         // filter( callbackfn )を使い配列で取得する。
                        const matchingMifMasterRecords = mifMaster48Resp.records.filter((mif) => {
                             return mif.A_事業所ID.value === fbRecord.A_事業所ID.value
                        });

                        if (matchingMifMasterRecords.length !== 0) {
                            // matchingMifMasterRecordsをテーブルに追加できるように形を変える。
                            // 配列型の変数、valueにpushしていく形で記述する。
                            let value: any = []
                            matchingMifMasterRecords.forEach((matchRecord)=> {
                                value.push(
                                    {
                                        value: {
                                            FB業務委託区分: {
                                                value: matchRecord.FB業務委託区分.value
                                            },
                                            機種: {
                                                value: matchRecord.機種.value
                                            },
                                            設置日: {
                                                value: matchRecord.設置日.value
                                            },
                                            担当営業: {
                                                value: matchRecord.担当営業.value
                                            },
                                            MIF数量: {
                                                value: matchRecord.数量.value
                                            },
                                            区分: {
                                                value: matchRecord.区分.value
                                            },
                                            A_MIFID: {
                                                value: matchRecord.A_MIFID.value
                                            },
                                            担当CE: {
                                                value: matchRecord.担当CE.value
                                            },
                                            シリアルNo: {
                                                value: matchRecord.シリアルNo.value
                                            },
                                            経過月: {
                                                value: matchRecord.経過月.value
                                            }
                                        }
                                    }
                                )
                            })
                            // updateRecordsにリターンする
                            return {
                                id: fbRecord.$id.value,
                                record: {
                                    'MIF情報': {
                                        value: value
                                    }
                                }
                            };   
                        } else {
                            return {
                                id: fbRecord.$id.value,
                                record: {
                                    'MIF情報': {
                                        value: [
                                            { 
                                                value: {
                                                    FB業務委託区分: {
                                                        value: ""
                                                    },
                                                    機種: {
                                                        value: ""
                                                    },
                                                    設置日: {
                                                        value: ""
                                                    },
                                                    担当営業: {
                                                        value: ""
                                                    },
                                                    MIF数量: {
                                                        value: ""
                                                    },
                                                    区分: {
                                                        value: ""
                                                    },
                                                    A_MIFID: {
                                                        value: ""
                                                    },
                                                    担当CE: {
                                                        value: ""
                                                    },
                                                    シリアルNo: {
                                                        value: ""
                                                    },
                                                    経過月: {
                                                        value: ""
                                                    }
                                                }   
                                            }
                                        ] // サブテーブルをクリア
                                    }
                                }
                            };                         
                        }

                    })
                    
                    // FB商談において台数0台、かつ事業所_IDがMIF情報にも存在するレコードに対しての操作
                    // 経過月=48ヶ月のMIFマスタのレコードがあれば、MIF情報に追加。

                    // まず、mifMaster48Resp.recordで繰り返し処理。

                    const mifUpdateParams = {
                        app: FB_APP_ID,
                        records: updateRecords
                    };
                    const startTime2 = performance.now();  // 開始時間を取得
                    await client.record.updateAllRecords(mifUpdateParams);
                    const endTime2 = performance.now();  // 開始時間を取得
                    const elapsedTime2 = endTime2-startTime2;
                    console.log("更新完了")
                    console.log(`更新の処理時間: ${elapsedTime2} ms`);
                    alert("MIF情報の更新完了");
                    location.reload()
                } catch (err: any) {
                    alert(err.message);
                    console.error(err.message);
                    deleteButton.classList.remove("click");
                    deleteButton.innerHTML = "<span></span>FB商談アプリのMIF情報を更新";
                    deleteButton.disabled = false;
                }
 
            }
        });

        return event;
    });
})();
