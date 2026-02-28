"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {
    Sparkles,
    ArrowRight,
    CheckCircle,
    Image as ImageIcon,
    Wand2,
    Calendar,
    Clock,
    MonitorPlay,
    Users,
    Heart,
    Palette,
    FileText,
    SquareLibrary,
    ClipboardList,
    Store,
    BookOpen
} from 'lucide-react';
import Link from 'next/link';

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function NanobananaWorkshopLP() {
    return (
        <div className="min-h-screen bg-[#FFFDFB] text-zinc-800 selection:bg-[#FF8E8B] selection:text-white">

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#FF8E8B] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-[20%] left-[-10%] w-72 h-72 bg-zinc-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="mb-6 inline-block border-b-2 border-rose-100 pb-2">
                            <span className="text-lg font-medium tracking-widest text-[#E07673] serif">
                                市販の教材では物足りないママへ
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-zinc-900 tracking-tight">
                            <span className="whitespace-nowrap relative z-10 inline-block">
                                <span className="absolute -bottom-1 left-0 w-full h-3 sm:h-4 bg-[#FF8E8B]/30 -z-10 rounded-full transform -skew-x-12"></span>
                                オリジナル教材作成
                            </span><br />
                            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mt-4 block">
                                ワークショップ
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                            最新の画像生成AIを使って、<br />世界に一つだけのオリジナル教材を作りませんか？
                        </p>

                        <div className="flex justify-center mt-4">
                            <Link href="#apply">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-yellow-400 text-yellow-950 px-8 py-3 rounded-full border border-yellow-500 shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-0.5 group relative overflow-hidden"
                                >
                                    <span className="text-xs font-bold tracking-widest opacity-90 relative z-10">90分 5,500円</span>
                                    <span className="text-lg font-bold flex items-center gap-2 relative z-10">
                                        ワークショップに申し込む
                                    </span>
                                    {/* Shiny overlay animation */}
                                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shine_3s_ease-in-out_infinite] z-20"></div>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Hero Image Area */}
            <section className="pb-20 -mt-10 relative z-10 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-video relative flex items-center justify-center group"
                >
                    {/* Using generated high-quality image of 4 Japanese women interacting at a laptop */}
                    <img
                        src="/stylish_moms_workshop.png"
                        alt="上品なママたちがパソコンを見ながら楽しく話している様子"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle elegant overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent"></div>
                </motion.div>
            </section>

            {/* 2. Pain Points */}
            <section id="about" className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">こんなお悩み、ありませんか？</h2>
                        <div className="w-20 h-1 bg-[#FF8E8B] mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {[
                            "市販のドリルや絵本だと、子どもの食いつきがイマイチ…",
                            "子どもの興味（車、恐竜、お姫様など）に特化した教材が見つからない",
                            "手作りしたいけど、絵を描く時間もスキルもない",
                            "AIツールに興味はあるけれど、難しそうで手が出ない",
                            "スマホやPCでサクッと作れるクリエイティブな趣味が欲しい"
                        ].map((pain, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                className="bg-[#FFFDFB] rounded-2xl p-6 flex items-start gap-4 border border-zinc-100 shadow-sm"
                            >
                                <div className="bg-rose-50 p-2 rounded-full text-[#FF8E8B] shrink-0 mt-1">
                                    <Heart className="w-5 h-5" />
                                </div>
                                <p className="text-zinc-700 leading-relaxed font-medium pt-1">{pain}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. Solution (What is nanobananapro) */}
            <section className="py-24 bg-gray-100 text-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2"
                        >
                            <span className="text-[#E07673] font-semibold tracking-wider uppercase mb-2 block">The Solution</span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
                                「Nano Banana Pro」なら<br />
                                そのお悩みをサクッと解決できます
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Nano Banana Proは、Googleが開発した最新の高品質AI画像生成ツールです。
                                専門的な知識は不要。簡単な言葉（プロンプト）を入力するだけで、驚くほど美しいイラストや画像を数秒で生成します。
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "高品質なイラストを数秒で思いのままに生成",
                                    "お子さんの好きなキャラクター・オリジナルキャラクターで教材作成が可能",
                                    "画像の中に自然な日本語や英語の文字を入れられる",
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-[#FF8E8B] shrink-0" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 w-full aspect-square bg-white rounded-3xl p-6 border border-gray-200 relative shadow-xl"
                        >
                            {/* Abstract Representation of AI Image Gen */}
                            <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex flex-col items-center justify-center p-8 text-center overflow-hidden relative">
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF8E8B] rounded-full filter blur-[60px] opacity-10"></div>
                                <Wand2 className="w-16 h-16 text-[#FF8E8B] mb-6 relative z-10" />
                                <h3 className="text-xl font-bold mb-2 relative z-10 text-gray-900">魔法のキャンバス</h3>
                                <p className="text-sm text-gray-500 relative z-10 font-medium">「文章問題が苦手な息子のために、<br />ポケモンのキャラクターを使った<br />さんすうの足し算のワークシートを作って！」</p>
                                <div className="mt-8 px-6 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-[#FF8E8B] text-sm animate-pulse relative z-10 font-bold tracking-wider">
                                    Generating worksheet...
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. 8 Kinds of Materials (New Section) */}
            <section className="py-24 bg-rose-50/50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#E07673] font-semibold tracking-wider uppercase mb-2 block">Create in 90 Minutes</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">90分で作れる6種類の教材</h2>
                        <div className="w-20 h-1 bg-[#FF8E8B] mx-auto rounded-full mb-8"></div>
                        <p className="text-zinc-600 max-w-2xl mx-auto leading-relaxed">
                            Nano Banana Proは、テキストを入力するだけで高品質なイラストや教育素材を生成できるGoogleのAIツール。
                            専門知識もデザインスキルも不要。お子さんの年齢や興味に合わせた教材が、数秒で完成します。
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { icon: <Palette />, title: "塗り絵", desc: "好きなテーマで何枚でも" },
                            { icon: <FileText />, title: "ワークシート", desc: "さんすう、こくご、英語など" },
                            { icon: <SquareLibrary />, title: "フラッシュカード", desc: "ひらがな・数字・英語など" },
                            { icon: <ClipboardList />, title: "手順説明カード", desc: "歯磨き・手洗いなど生活習慣に" },
                            { icon: <Store />, title: "お店屋さんごっこセット", desc: "メニュー表・お金・値札" },
                            { icon: <BookOpen />, title: "ミニ絵本", desc: "オリジナルストーリーを視覚化" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"
                            >
                                <div className="text-[#FF8E8B] mb-4 [&>svg]:w-10 [&>svg]:h-10">{item.icon}</div>
                                <h3 className="font-bold text-zinc-900 mb-2">{item.title}</h3>
                                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Benefits */}
            <section className="py-24 bg-[#FFFDFB]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#E07673] font-semibold tracking-wider uppercase mb-2 block">Benefits</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">ワークショップで得られる3つの体験</h2>
                        <div className="w-20 h-1 bg-[#FF8E8B] mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Palette className="w-8 h-8 text-[#FF8E8B]" />,
                                title: "AIに指示",
                                desc: "AIに思い通りの絵を描かせるための、ちょっとしたコツを伝授。初心者でもすぐに素敵なイラストを作れるようになります。"
                            },
                            {
                                icon: <ImageIcon className="w-8 h-8 text-[#FF8E8B]" />,
                                title: "「マイキャラクター」の作成",
                                desc: "お子様に似せたオリジナルキャラクターを作り、様々なシチュエーションで活躍させる絵本やフラッシュカードを作ります。"
                            },
                            {
                                icon: <Users className="w-8 h-8 text-[#FF8E8B]" />,
                                title: "ママ同士のアイデアシェア",
                                desc: "同じ境遇のママたちと、AIをどう子育てに活かすかアイデアを共有。新しい発見と仲間作りの場になります。"
                            }
                        ].map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-3xl p-8 shadow-lg shadow-zinc-200/50 border border-zinc-100 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-rose-100">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">{benefit.title}</h3>
                                <p className="text-zinc-600 leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Curriculum */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">充実の1時間半カリキュラム</h2>
                        <div className="w-20 h-1 bg-[#FF8E8B] mx-auto rounded-full"></div>
                        <p className="mt-6 text-zinc-600">講義と実践（ワーク）を交えた、手を動かして学べる楽しいプログラムです。</p>
                    </motion.div>

                    <div className="space-y-6">
                        {[
                            { time: "0:00 - 0:20", title: "はじめに & Nano Banana Proのキホン", desc: "最新AIの仕組みと、教育にどう活かせるかの事例紹介。" },
                            { time: "0:20 - 0:50", title: "【実践】プロンプトのコツを掴もう", desc: "実際にスマホ/PCを使って簡単な画像生成にチャレンジ。" },
                            { time: "0:50 - 1:20", title: "【ワーク】オリジナル教材を作ろう", desc: "お子様の興味に合わせた絵本の1ページや、ひらがな表などを作成。" },
                            { time: "1:20 - 1:30", title: "作品発表 & 交流会", desc: "作った作品を見せ合いながら、ママ同士でワイワイ交流。" },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col md:flex-row gap-4 md:gap-8 bg-[#FFFDFB] p-6 pr-8 rounded-2xl border border-zinc-100 relative overflow-hidden transition-colors hover:border-[#FF8E8B]/30"
                            >
                                <div className="md:w-32 shrink-0">
                                    <span className="inline-block px-3 py-1 bg-rose-50 text-[#E07673] rounded-md font-semibold font-mono text-sm border border-rose-100">
                                        {step.time}
                                    </span>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-zinc-900 mb-2">{step.title}</h3>
                                    <p className="text-zinc-600 text-sm md:text-base">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Instructor */}
            <section className="py-24 bg-[#FFFDFB]">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#E07673] font-semibold tracking-wider uppercase mb-2 block">Instructor</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">講師紹介</h2>
                        <div className="w-20 h-1 bg-[#FF8E8B] mx-auto rounded-full"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100 flex flex-col md:flex-row items-center gap-10"
                    >
                        <div className="shrink-0">
                            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-rose-50 shadow-md">
                                <img
                                    src="/profile.jpg"
                                    alt="Instructor Maki Katsume"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold text-zinc-900 mb-1">勝目 麻希</h3>
                            <p className="text-[#FF8E8B] font-medium mb-4 tracking-wider">Maki Katsume</p>
                            <div className="inline-block px-4 py-1 bg-rose-50 text-zinc-700 rounded-full text-sm font-semibold mb-6 border border-rose-100">
                                ライター・AI活用インストラクター
                            </div>
                            <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                                「テクノロジーを味方につけて、自由な働き方を」をテーマに活動中。難しく感じるITツールも、女性ならではの感性でわかりやすく伝えます。一緒に新しい一歩を踏み出しましょう。
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Target Audience */}
            <section className="py-20 bg-gray-100 text-gray-900 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-10 text-gray-900">こんな素敵なママたちをお待ちしています！</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["AIを生活に取り入れたい方", "子どもの好奇心を伸ばしたい方", "新しい学びにワクワクする方"].map((tag, idx) => (
                            <span key={idx} className="bg-white border border-gray-200 px-6 py-3 rounded-full text-gray-700 font-medium flex items-center gap-2 shadow-sm">
                                <CheckCircle className="w-5 h-5 text-[#FF8E8B]" />
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Details & CTA */}
            <section id="apply" className="py-24 bg-[#FFFDFB]">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-zinc-50 text-center relative overflow-hidden hover:shadow-rose-100/50 transition-shadow duration-500"
                    >
                        {/* Top decorative bar */}
                        <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-zinc-900 via-[#FF8E8B] to-zinc-900"></div>

                        <h2 className="text-3xl font-bold text-zinc-900 mb-8 border-b border-zinc-100 pb-8 mt-2">開催概要・お申し込み</h2>

                        <div className="space-y-6 mb-12 text-left bg-[#FFFDFB] p-8 rounded-2xl border border-zinc-100">
                            <div className="flex items-start gap-4">
                                <Calendar className="w-6 h-6 text-[#FF8E8B] shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-zinc-900">開催日時</h4>
                                    <p className="text-zinc-600">2026年3月〇〇日 (金) 10:00 - 11:30（予定）</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-[#FF8E8B] shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-zinc-900">開催場所</h4>
                                    <p className="text-zinc-600">オンライン（Zoomミーティング）</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MonitorPlay className="w-6 h-6 text-[#FF8E8B] shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-zinc-900">持ち物・準備</h4>
                                    <p className="text-zinc-600">PCまたはタブレット（スマホでも参加可能ですが、画面が大きい方が操作しやすいです）</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Heart className="w-6 h-6 text-[#FF8E8B] shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-zinc-900">参加費</h4>
                                    <p className="text-zinc-900 text-2xl font-bold mt-1">5,500<span className="text-base font-normal text-zinc-600">円（税込）</span></p>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-yellow-400 text-yellow-950 px-12 py-4 rounded-full border border-yellow-500 shadow-md hover:bg-yellow-300 hover:shadow-lg transition-all flex flex-col items-center justify-center gap-0.5 group mx-auto relative overflow-hidden"
                        >
                            <span className="text-sm font-bold tracking-widest opacity-90 relative z-10">90分 5,500円</span>
                            <span className="text-xl font-bold flex items-center gap-2 relative z-10">
                                ワークショップに申し込む
                            </span>
                            {/* Shiny overlay animation */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:animate-[shine_1.5s_ease-in-out_infinite] z-20"></div>
                        </motion.button>
                        <p className="text-sm text-zinc-500 mt-4">※お申し込みフォームへ遷移します（現在はデモ用）</p>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-100 py-12 text-center text-gray-500 border-t border-gray-200">
                <div className="container mx-auto px-4 flex flex-col items-center">
                    <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
                        <Link href="/privacy-policy" className="hover:text-gray-900 transition-colors">プライバシーポリシー</Link>
                        <Link href="/tokushoho" className="hover:text-gray-900 transition-colors">特定商取引法に基づく表記</Link>
                    </div>
                    <p className="mb-4">© 2026 勝目麻希. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

// Temporary icon component since MapPin isn't imported from lucide-react above
function MapPin(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    );
}
