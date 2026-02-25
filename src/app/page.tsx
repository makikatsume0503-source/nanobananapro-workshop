"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background-dark)] text-[var(--color-text-primary)]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-panel border-b border-[var(--color-gold)]/20 py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300">
        <div className="text-xl font-bold tracking-wider gold-gradient-text">MAKI KATSUME</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#about" className="hover:text-[var(--color-gold)] transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-[var(--color-gold)] transition-colors">SERVICES</a>
          <a href="#works" className="hover:text-[var(--color-gold)] transition-colors">WORKS</a>
          <a href="#contact" className="hover:text-[var(--color-gold)] transition-colors">CONTACT</a>
        </div>
        <a href="#contact" className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium border border-[var(--color-gold)] text-[var(--color-gold)] rounded-full hover:bg-[var(--color-gold)] hover:text-[var(--color-navy)] transition-all duration-300">
          お問い合わせ
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-[var(--color-navy-light)]/20 blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[var(--color-gold)]/10 blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[var(--color-gold)] text-sm md:text-base font-medium tracking-[0.2em] mb-4 uppercase">
                Freelance Writer / AI Utilization Instructor
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                言葉と<span className="gold-gradient-text">金融の専門知識</span>で、<br className="hidden md:block" />
                あなたのビジネスを<br className="hidden md:block" />次のステージへ。
              </h1>
              <p className="text-[var(--color-text-secondary)] text-lg mb-10 max-w-xl mx-auto md:mx-0">
                元メガバンク出身の確かなリスク管理とプロライターの「言語化」スキルを武器に、企業の課題解決とAI導入を支援します。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-[var(--color-navy)] font-bold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center">
                  サービスを見る
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#about" className="w-full sm:w-auto px-8 py-4 glass-panel text-[var(--color-text-primary)] font-medium rounded-full hover:bg-[var(--color-navy-light)]/50 transition-all flex items-center justify-center">
                  プロフィール
                </a>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 mt-16 md:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-2xl overflow-hidden glass-panel border border-[var(--color-gold)]/30 p-2"
            >
              {/* プレースホルダー：実際には勝目氏のポートレート画像を配置 */}
              <div className="w-full h-full bg-gradient-to-br from-[var(--color-navy-light)] to-[var(--color-navy)] rounded-xl flex items-center justify-center border border-[var(--color-text-secondary)]/20">
                <span className="text-[var(--color-text-secondary)] text-lg gold-gradient-text">Portrait Image Placeholder</span>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[var(--color-navy)]/30 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">ABOUT <span className="gold-gradient-text">ME</span></h2>
            <div className="w-16 h-1 bg-[var(--color-gold)] mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-5/12">
              <div className="relative aspect-square max-w-sm mx-auto rounded-full overflow-hidden border-4 border-[var(--color-gold)]/20 p-2">
                <div className="w-full h-full rounded-full bg-[var(--color-navy-light)] flex items-center justify-center">
                  <span className="text-[var(--color-text-secondary)]">Profile Image</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-7/12">
              <h3 className="text-2xl font-bold mb-2">勝目 麻希 <span className="text-[var(--color-text-secondary)] text-lg font-normal ml-2">Maki Katsume</span></h3>
              <p className="text-[var(--color-gold)] font-medium mb-6">フリーランスライター / 2級FP技能士 / AI活用インストラクター</p>

              <div className="text-[var(--color-text-secondary)] space-y-4 mb-8 leading-relaxed">
                <p>
                  愛知県名古屋市在住・岐阜県出身。<br />
                  新卒で三菱UFJ銀行に総合職として入行し、中小企業〜大企業向けの融資や金融商品の販売などを経験。その後、商社への転職・結婚・出産を経て、2018年4月よりフリーランスのライターとして活動を開始しました。
                </p>
                <p>
                  現在は、金融機関（銀行・証券会社・保険会社）、クレジットカード会社、ファクタリング会社や経済・ビジネス系メディアのコンテンツ作成をメインに、メールマガジン・SNS代行、広報サポートなども行なっています。
                </p>
                <p>
                  さらに、自身の経験を活かしたライター育成やフリーランス女性の支援、そして「FinEdit」として中小企業向けのAI導入支援やライター向けAIライティング講座の講師など、AI活用インストラクターとしても幅広く活動しています。
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "金融・経済専門ライティング",
                  "メールマガジン・SNS運用代行",
                  "広報・PRサポート",
                  "AI導入・活用コンサルティング",
                  "AIライティング実践講座",
                  "FP2級技能士資格保有"
                ].map((skill, index) => (
                  <div key={index} className="flex items-center text-sm font-medium">
                    <CheckCircle className="w-5 h-5 text-[var(--color-gold)] mr-2 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR <span className="gold-gradient-text">SERVICES</span></h2>
            <div className="w-16 h-1 bg-[var(--color-gold)] mx-auto rounded-full"></div>
            <p className="mt-6 text-[var(--color-text-secondary)] max-w-2xl mx-auto">金融とITの力で、あなたのビジネス課題を言葉にして解決へと導きます。</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl group transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <span className="text-2xl font-bold text-[var(--color-gold)]">01</span>
              </div>
              <h3 className="text-xl font-bold mb-4">記事制作／編集・PR</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                金融機関や経済メディア向けのSEOコラム、インタビュー、プレスリリース作成。専門的な内容も読者にわかりやすく翻訳し、ブランド価値を高めるコンテンツを制作します。
              </p>
              <ul className="text-sm space-y-2 text-[var(--color-text-primary)]">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-0.5" /> SEO記事・コラム執筆</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-0.5" /> インタビュー・事例作成</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-0.5" /> プレスリリース・広報資料</li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl group transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <span className="text-2xl font-bold text-[var(--color-gold)]">02</span>
              </div>
              <h3 className="text-xl font-bold mb-4">AI導入コンサルティング<br /><span className="text-sm font-normal text-[var(--color-gold)]">by FinEdit</span></h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                中小企業を対象としたAI導入支援。業務フローの可視化から、プロンプトエンジニアリングを活用した実務の効率化まで伴走型でサポートします。
              </p>
              <ul className="text-sm space-y-2 text-[var(--color-text-primary)]">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-0.5" /> 業務フローの診断・AI化提案</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-0.5" /> 社内研修・ワークショップ</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-0.5" /> 業務アプリ・HPの作成支援</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="glass-panel p-8 rounded-2xl group transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--color-navy-light)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold)]/20 transition-colors">
                <span className="text-2xl font-bold text-[var(--color-gold)]">03</span>
              </div>
              <h3 className="text-xl font-bold mb-4">教育・コミュニティ運営</h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
                培ってきたライティング技術とAI活用スキルを独自のカリキュラムで提供。東海エリアを中心としたライターコミュニティの運営も行っています。
              </p>
              <ul className="text-sm space-y-2 text-[var(--color-text-primary)]">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-0.5" /> AIライティング実践講座</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-0.5" /> 女性ライター育成・支援</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 text-[var(--color-gold)] mr-2 mt-0.5" /> 東海ライターチーム運営</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Works & Track Record Section */}
      <section id="works" className="py-24 bg-[var(--color-navy)]/30 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WORKS & <span className="gold-gradient-text">TRACK RECORD</span></h2>
            <div className="w-16 h-1 bg-[var(--color-gold)] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center border-b border-[var(--color-gold)]/20 pb-4">
                <span className="w-2 h-8 bg-[var(--color-gold)] mr-3"></span>
                執筆・制作実績
              </h3>
              <ul className="space-y-4 text-[var(--color-text-secondary)]">
                <li className="glass-panel p-4 rounded-lg">三菱UFJ銀行様（金融コラム）</li>
                <li className="glass-panel p-4 rounded-lg">幻冬舎ゴールドオンライン様（SEO記事・コラム）</li>
                <li className="glass-panel p-4 rounded-lg">Yahoo!ニュース掲載記事（月間90万PV／総合ランキング1位獲得）</li>
                <li className="glass-panel p-4 rounded-lg">大手金融機関・外資系資産運用会社・税理士法人（非公開多数）</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center border-b border-[var(--color-gold)]/20 pb-4">
                <span className="w-2 h-8 bg-[var(--color-gold)] mr-3"></span>
                登壇・活動実績
              </h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-gold)]/30 before:to-transparent">
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-background-dark)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 md:ml-0 z-10"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-panel p-4 rounded-lg border border-[var(--color-gold)]/10 ml-4 md:ml-0">
                    <div className="text-[var(--color-gold)] font-bold text-sm mb-1">2026年 2月</div>
                    <div className="text-sm">学び舎mom株式会社主催「集中伴走ワークショップ」 女性起業家・経営者向けDX・AI活用講座 メイン講師</div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[var(--color-navy-light)] bg-[var(--color-background-dark)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 md:ml-0 z-10"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-panel p-4 rounded-lg border border-[var(--color-navy-light)] ml-4 md:ml-0">
                    <div className="text-[var(--color-text-secondary)] font-bold text-sm mb-1">2025年 6月</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">フリーランス女性のコミュニティHuntersで登壇</div>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[var(--color-navy-light)] bg-[var(--color-background-dark)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 md:ml-0 z-10"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-panel p-4 rounded-lg border border-[var(--color-navy-light)] ml-4 md:ml-0">
                    <div className="text-[var(--color-text-secondary)] font-bold text-sm mb-1">2025年 3月</div>
                    <div className="text-sm text-[var(--color-text-secondary)]">南山大学「英語ピッチ大会」メンターとしてサポート</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--color-navy-light)]/10 blur-[120px] -z-10" />

        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">CONTACT <span className="gold-gradient-text">US</span></h2>
          <div className="w-16 h-1 bg-[var(--color-gold)] mx-auto rounded-full mb-10"></div>

          <div className="glass-panel max-w-3xl mx-auto p-8 md:p-12 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">お仕事のご依頼・ご相談</h3>
            <p className="text-[var(--color-text-secondary)] mb-8">
              記事執筆、広報サポート、AI導入コンサルティング、研修講師のご依頼などお気軽にお問い合わせください。オンラインおよび名古屋エリアでの対面ミーティングも対応可能です。
            </p>
            <button className="px-10 py-4 bg-[var(--color-gold)] text-[var(--color-navy)] font-bold rounded-full hover:bg-[var(--color-gold-light)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all transform hover:-translate-y-1">
              お問い合わせフォームへ進む
            </button>
            <p className="text-xs text-[var(--color-text-secondary)] mt-6">
              ※現在多くのお問い合わせをいただいており、お急ぎのご依頼はお受けできない場合がございます。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#05060A] py-10 border-t border-[var(--color-gold)]/10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-[var(--color-text-secondary)]">
          <div className="mb-4 md:mb-0 font-bold tracking-wider gold-gradient-text">MAKI KATSUME</div>
          <div>&copy; {new Date().getFullYear()} Maki Katsume. All Rights Reserved.</div>
        </div>
      </footer>
    </main>
  );
}
