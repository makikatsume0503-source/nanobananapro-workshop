import Link from 'next/link';

export default function Tokushoho() {
    return (
        <div className="min-h-screen bg-[#FFFDFB] text-zinc-800 font-sans py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <Link href="/nanobanana-workshop" className="text-[#FF8E8B] hover:text-[#E07673] mb-8 inline-block font-medium">
                    &larr; ワークショップ詳細へ戻る
                </Link>

                <h1 className="text-3xl font-bold mb-10 text-zinc-900 border-b pb-4">特定商取引法に基づく表記</h1>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 space-y-6">
                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-6">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">販売事業者名</h2>
                        <p className="text-zinc-600 md:col-span-3">勝目麻希</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-6">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">代表責任者名</h2>
                        <p className="text-zinc-600 md:col-span-3">勝目 麻希</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-6">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">所在地</h2>
                        <p className="text-zinc-600 md:col-span-3">
                            ※請求があったら遅滞なく開示します。
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-6">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">電話番号</h2>
                        <p className="text-zinc-600 md:col-span-3">
                            ※請求があったら遅滞なく開示します。
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-6">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">メールアドレス</h2>
                        <p className="text-zinc-600 md:col-span-3">
                            ※実際のメールアドレスをここに記載してください。
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-6">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">販売価格</h2>
                        <p className="text-zinc-600 md:col-span-3">
                            各商品の購入ページにて表示する価格。
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-6">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">商品代金以外の必要料金</h2>
                        <p className="text-zinc-600 md:col-span-3">
                            消費税、インターネット接続料金その他の電気通信回線の通信に関する費用（お客様負担となります）。
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-6">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">支払方法および支払の時期</h2>
                        <p className="text-zinc-600 md:col-span-3">
                            クレジットカード決済等。支払時期は各カード会社の引き落とし日となります。
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4 border-b pb-6">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">商品の引渡時期</h2>
                        <p className="text-zinc-600 md:col-span-3">
                            決済完了後、即時（または指定のワークショップ開催日時）。
                        </p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <h2 className="font-bold text-zinc-900 md:col-span-1">返品・キャンセル・交換</h2>
                        <p className="text-zinc-600 md:col-span-3">
                            デジタルコンテンツ・オンラインサービスの特性上、原則として購入後の返品・返金・キャンセルはお受けできません。詳細は利用規約をご確認ください。
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
