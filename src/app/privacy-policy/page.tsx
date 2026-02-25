import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#FFFDFB] text-zinc-800 font-sans py-20">
            <div className="container mx-auto px-4 max-w-3xl">
                <Link href="/nanobanana-workshop" className="text-[#FF8E8B] hover:text-[#E07673] mb-8 inline-block font-medium">
                    &larr; ワークショップ詳細へ戻る
                </Link>

                <h1 className="text-3xl font-bold mb-10 text-zinc-900 border-b pb-4">プライバシーポリシー</h1>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4 border-l-4 border-[#FF8E8B] pl-3">1. 個人情報の収集・利用目的</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            当方が運営するサービス（以下、「本サービス」）をご利用いただくにあたり、氏名、メールアドレス等の個人情報をご提供いただく場合があります。<br />
                            これらの情報は、本サービスの提供、お問い合わせへの対応、および関連する情報提供のために利用し、それ以外の目的では使用いたしません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4 border-l-4 border-[#FF8E8B] pl-3">2. 個人情報の第三者への提供</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            当方は、ご本人の同意を得ることなく、第三者に個人情報を提供することはありません。<br />
                            ただし、法令に基づく場合や、人の生命、身体または財産の保護のために必要がある場合を除きます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4 border-l-4 border-[#FF8E8B] pl-3">3. 個人情報の安全管理</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            当方は、収集した個人情報の紛失、破壊、改ざん、および漏洩等を防止するため、必要かつ適切な安全対策を講じます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4 border-l-4 border-[#FF8E8B] pl-3">4. 個人情報の開示・訂正・削除</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            ご本人から個人情報の開示、訂正、削除等のお申し出があった場合には、ご本人であることを確認の上、速やかに対応いたします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4 border-l-4 border-[#FF8E8B] pl-3">5. セキュリティ・Cookieに関する方針</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            本サイトでは、ユーザー利便性の向上やアクセス状況の解析のためにCookieを使用しています。ブラウザの設定によりCookieの受信を拒否することも可能です。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4 border-l-4 border-[#FF8E8B] pl-3">6. プライバシーポリシーの変更</h2>
                        <p className="text-zinc-600 leading-relaxed">
                            当方は、法令の改正等に伴い、本ポリシーを必要に応じて見直し、予告なく変更することがあります。最新のプライバシーポリシーは、本ページにて公開いたします。
                        </p>
                    </section>

                    <div className="pt-6 border-t border-zinc-100 text-zinc-500 text-sm">
                        制定日: 2026年2月25日<br />
                        FinEdit Maki Katsume®<br />
                        代表: 勝目 麻希
                    </div>
                </div>
            </div>
        </div>
    );
}
