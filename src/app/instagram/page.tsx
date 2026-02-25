'use client';

import React, { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import { Download, Upload, ChevronRight, ChevronLeft, Image as ImageIcon, Feather } from 'lucide-react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export default function InstagramCarouselGenerator() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isExporting, setIsExporting] = useState(false);

    // Custom Images Upload
    const [coverImage, setCoverImage] = useState<string | null>(null);
    const [profileImage, setProfileImage] = useState<string | null>(null);

    // Slide Text States
    const [slide1Text, setSlide1Text] = useState({
        subtitle: 'AIの叡智を取り入れて、人生を豊かにする',
        subtitleSize: 'text-4xl',
        showSubtitle: true,
        title1: 'おうちCFOの活動を',
        title1Size: 'text-7xl',
        title2: '始めます',
        title2Size: 'text-6xl',
    });

    const [slide2Text, setSlide2Text] = useState({
        intro: '仕事に家事に忙しくも充実した日々。\nでも、ふと「母」として\n日常に戻ったとたん——',
        introSize: 'text-4xl',
        list1: '日々のタスク',
        list2: '終わらない情報収集',
        list3: '子どもの勉強のサポート',
        listSize: 'text-4xl',
        highlight: '「私がいないと回らない」',
        highlightSize: 'text-5xl',
        outro: 'そんなギリギリの毎日に\n息苦しさを感じていました。',
        outroSize: 'text-4xl',
    });

    const [slide3Text, setSlide3Text] = useState({
        title: 'そんな時、AI（最高の叡智）と\n出会いました。',
        titleSize: 'text-5xl',
        intro: '最初は「仕事の効率化ツール」だと\n思っていたAI。\nでも、ある日気づいたんです。\n\nAIは、日常生活にこそ活かせる。',
        introSize: 'text-4xl',
        highlight: '私を単純作業から解放し、',
        highlightSize: 'text-5xl',
        outro: '本来の「母の愛」や「私の人生」に\n還してくれる頼もしいパートナーだ\nということに。',
        outroSize: 'text-4xl',
    });

    const [slide4Text, setSlide4Text] = useState({
        title: 'AI × 教育',
        titleSize: 'text-6xl',
        intro: 'たとえば、我が子の学習。\n市販のドリルに彼を合わせるのではなく、\nAIを使って',
        introSize: 'text-4xl',
        highlight: '「彼専用のアプリ」や\n「ワークシート」を自作しました。',
        highlightSize: 'text-[44px]',
        outro: '「みんなと同じ」ではなく、\n「我が子だけの最適解」を創り出す。\n\nこれこそが、最先端の叡智を使った\n最高の教育投資だったのです。',
        outroSize: 'text-4xl',
    });

    const [slide5Text, setSlide5Text] = useState({
        title: 'AI × お金と時間',
        titleSize: 'text-6xl',
        intro: '面倒な資料整理や、\n終わりのないリサーチはAIに任せて。\n\n生まれた「知的な余白」で\n子どもと真剣に向き合い、',
        introSize: 'text-4xl',
        highlight: '「お金と時間を幸せに使うための戦略」',
        highlightSize: 'text-4xl',
        suffix: 'を',
        suffixSize: 'text-4xl',
        outro: '立てる。\n\nこれからの時代、\nただ貯めるだけの倹約家ではなく、\n家族の未来を戦略的にデザインする\n「おうちCFO」が必要なんです。',
        outroSize: 'text-4xl',
    });

    const [slide6Text, setSlide6Text] = useState({
        intro: 'AIなんて難しそうだし、私には関係ない。\nそう感じるかもしれません。\n\nでも、この最高の叡智を取り入れた人から、',
        introSize: 'text-4xl',
        highlight1: '人生は確実に動き始めます。',
        highlight1Size: 'text-5xl',
        outro1: '知性で余白を生み出し、\n自分らしい豊かさをデザインする。\nそれが、',
        outro1Size: 'text-4xl',
        highlight2: '「おうちCFO」の\n生き方です。',
        highlight2Size: 'text-6xl',
    });

    const [slide7Text, setSlide7Text] = useState({
        title: '毎日必死に頑張るのは、\nもう終わりにしませんか？',
        titleSize: 'text-6xl',
        outro: '世界中の叡智が、\n手のひらの中にある時代です。\n\nAIを日常に\n取り入れるだけで、\n暮らしの景色は一変します。',
        outroSize: 'text-5xl',
    });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: (val: string) => void) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setter(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const exportAllSlides = async () => {
        setIsExporting(true);
        try {
            const zip = new JSZip();

            for (let i = 0; i < 9; i++) {
                const slideElement = carouselRefs.current[i];
                if (!slideElement) continue;

                const dataUrl = await htmlToImage.toPng(slideElement, {
                    quality: 1.0,
                    pixelRatio: 2, // High resolution
                    style: {
                        backgroundColor: '#242F4B' // Fallback for var(--color-navy)
                    }
                });

                const base64Data = dataUrl.split(',')[1];
                zip.file(`instagram-slide-${i + 1}.png`, base64Data, { base64: true });

                await new Promise(resolve => setTimeout(resolve, 500));
            }

            const content = await zip.generateAsync({ type: 'blob' });
            saveAs(content, 'instagram-carousel.zip');
        } catch (error) {
            console.error('Failed to export slides:', error);
            alert('スライドの生成に失敗しました。');
        } finally {
            setIsExporting(false);
        }
    };

    const exportCurrentSlide = async () => {
        const slideElement = carouselRefs.current[currentSlide];
        if (!slideElement) return;

        setIsExporting(true);
        try {
            const dataUrl = await htmlToImage.toPng(slideElement, {
                quality: 1.0,
                pixelRatio: 2,
                style: {
                    backgroundColor: '#242F4B' // Fallback for var(--color-navy)
                }
            });
            const link = document.createElement('a');
            link.download = `instagram-slide-${currentSlide + 1}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error('Failed to export slide:', error);
        } finally {
            setIsExporting(false);
        }
    };

    // Shared Design Elements (Navy theme)
    interface SlideContainerProps {
        children: React.ReactNode;
        index: number;
        bg?: string;
        text?: string;
    }

    const SlideContainer = ({ children, index, bg = 'bg-[var(--color-navy)]', text = 'text-white' }: SlideContainerProps) => (
        <div
            ref={(el) => {
                carouselRefs.current[index] = el;
            }}
            className={`w-[1080px] h-[1350px] ${bg} ${text} relative flex flex-col justify-center items-center overflow-hidden flex-shrink-0 font-serif`}
            style={{
                boxShadow: isExporting ? 'none' : '0 10px 30px rgba(0,0,0,0.1)',
            }}
        >
            {/* Decorative Gold Border */}
            <div className="absolute top-[40px] left-[40px] right-[40px] bottom-[40px] border border-[var(--color-gold)] opacity-30 pointer-events-none z-0"></div>

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--color-navy-light)] to-[var(--color-navy)] opacity-20 pointer-events-none"></div>

            {/* Page Number */}
            <div className="absolute bottom-16 right-16 text-[var(--color-gold)] opacity-50 text-3xl font-sans tracking-widest z-10">
                {index + 1} / 9
            </div>

            <div className="z-10 w-full h-full flex flex-col items-center justify-center p-32">
                {children}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans py-8">
            <div className="max-w-6xl mx-auto w-full px-6 flex-grow flex flex-col">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 border-b-2 border-[#D4AF37] inline-block pb-1">Instagram Carousel Generator</h1>
                        <p className="text-gray-500 mt-2">テーマ：「私が『AI使いおうちCFO』になった日」</p>
                    </div>
                    <div className="flex gap-4">
                        <button
                            onClick={exportCurrentSlide}
                            disabled={isExporting}
                            className="px-4 py-2 bg-white text-[#1A2238] border border-[#1A2238] rounded-md hover:bg-gray-50 flex items-center gap-2 transition"
                        >
                            <Download size={18} />
                            現在のスライドを保存
                        </button>
                        <button
                            onClick={exportAllSlides}
                            disabled={isExporting}
                            className="px-6 py-2 bg-[#1A2238] text-white rounded-md hover:bg-[#2A3655] flex items-center gap-2 transition font-medium"
                        >
                            <Download size={18} />
                            {isExporting ? '生成中...' : '全9枚をZIPで保存'}
                        </button>
                    </div>
                </div>

                {/* Tools & Editor Layout */}
                <div className="flex gap-8 mb-8 flex-grow">

                    {/* Left Panel: Editor */}
                    <div className="w-[400px] flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-[700px] overflow-hidden">
                        <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2 flex items-center justify-between">
                            <span>テキスト・画像編集</span>
                            <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded">スライド {currentSlide + 1}/9</span>
                        </h2>

                        <div className="flex-grow overflow-y-auto pr-2 space-y-6">

                            {currentSlide === 0 && (
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[var(--color-navy)] flex items-center gap-2"><span className="bg-[var(--color-gold)] text-[var(--color-navy)] w-5 h-5 rounded-full flex items-center justify-center text-xs">1</span> 表紙</h3>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <div className="flex justify-between items-center mb-2">
                                            <label className="text-xs font-medium text-gray-700">サブタイトル（上部）</label>
                                            <label className="flex items-center gap-1 cursor-pointer">
                                                <input type="checkbox" checked={slide1Text.showSubtitle} onChange={e => setSlide1Text({ ...slide1Text, showSubtitle: e.target.checked })} className="rounded text-[var(--color-navy)] focus:ring-[var(--color-navy)]" />
                                                <span className="text-xs text-gray-500">表示</span>
                                            </label>
                                        </div>
                                        <div className="flex gap-2">
                                            <input type="text" value={slide1Text.subtitle} onChange={e => setSlide1Text({ ...slide1Text, subtitle: e.target.value })} className="flex-grow text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)] focus:ring-[var(--color-gold)]" />
                                            <select value={slide1Text.subtitleSize} onChange={e => setSlide1Text({ ...slide1Text, subtitleSize: e.target.value })} className="w-24 text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-2xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-6xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">メインタイトル 1行目</label>
                                        <div className="flex gap-2">
                                            <input type="text" value={slide1Text.title1} onChange={e => setSlide1Text({ ...slide1Text, title1: e.target.value })} className="flex-grow text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)] focus:ring-[var(--color-gold)]" />
                                            <select value={slide1Text.title1Size} onChange={e => setSlide1Text({ ...slide1Text, title1Size: e.target.value })} className="w-24 text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-5xl">小</option>
                                                <option value="text-7xl">中</option>
                                                <option value="text-8xl">大</option>
                                                <option value="text-9xl">特大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">メインタイトル 2行目（ゴールド）</label>
                                        <div className="flex gap-2">
                                            <input type="text" value={slide1Text.title2} onChange={e => setSlide1Text({ ...slide1Text, title2: e.target.value })} className="flex-grow text-sm border-gray-300 rounded-md shadow-sm border-2 border-l-[var(--color-gold)] focus:border-[var(--color-gold)] focus:ring-[var(--color-gold)]" />
                                            <select value={slide1Text.title2Size} onChange={e => setSlide1Text({ ...slide1Text, title2Size: e.target.value })} className="w-24 text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-6xl">中</option>
                                                <option value="text-8xl">大</option>
                                                <option value="text-9xl">特大</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentSlide === 1 && (
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[var(--color-navy)] flex items-center gap-2"><span className="bg-[var(--color-gold)] text-[var(--color-navy)] w-5 h-5 rounded-full flex items-center justify-center text-xs">2</span> 課題</h3>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">導入文 (intro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={3} value={slide2Text.intro} onChange={e => setSlide2Text({ ...slide2Text, intro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)] focus:ring-[var(--color-gold)]" />
                                            <select value={slide2Text.introSize} onChange={e => setSlide2Text({ ...slide2Text, introSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">リスト項目</label>
                                        <div className="flex flex-col gap-2">
                                            <input type="text" value={slide2Text.list1} onChange={e => setSlide2Text({ ...slide2Text, list1: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <input type="text" value={slide2Text.list2} onChange={e => setSlide2Text({ ...slide2Text, list2: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <input type="text" value={slide2Text.list3} onChange={e => setSlide2Text({ ...slide2Text, list3: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide2Text.listSize} onChange={e => setSlide2Text({ ...slide2Text, listSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm mt-1">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">ハイライト (highlight)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={2} value={slide2Text.highlight} onChange={e => setSlide2Text({ ...slide2Text, highlight: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm border-2 border-l-[var(--color-gold)] focus:border-[var(--color-gold)]" />
                                            <select value={slide2Text.highlightSize} onChange={e => setSlide2Text({ ...slide2Text, highlightSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-5xl">中</option>
                                                <option value="text-6xl">大</option>
                                                <option value="text-7xl">特大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">結び文 (outro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={2} value={slide2Text.outro} onChange={e => setSlide2Text({ ...slide2Text, outro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide2Text.outroSize} onChange={e => setSlide2Text({ ...slide2Text, outroSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentSlide === 2 && (
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[var(--color-navy)] flex items-center gap-2"><span className="bg-[var(--color-gold)] text-[var(--color-navy)] w-5 h-5 rounded-full flex items-center justify-center text-xs">3</span> 解決策の提示</h3>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">タイトル (title)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={2} value={slide3Text.title} onChange={e => setSlide3Text({ ...slide3Text, title: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide3Text.titleSize} onChange={e => setSlide3Text({ ...slide3Text, titleSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-5xl">中</option>
                                                <option value="text-6xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">本文前半 (intro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={4} value={slide3Text.intro} onChange={e => setSlide3Text({ ...slide3Text, intro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide3Text.introSize} onChange={e => setSlide3Text({ ...slide3Text, introSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">ハイライト (highlight)</label>
                                        <div className="flex flex-col gap-2">
                                            <input type="text" value={slide3Text.highlight} onChange={e => setSlide3Text({ ...slide3Text, highlight: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm border-2 border-l-[var(--color-gold)] focus:border-[var(--color-gold)]" />
                                            <select value={slide3Text.highlightSize} onChange={e => setSlide3Text({ ...slide3Text, highlightSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-5xl">中</option>
                                                <option value="text-6xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">本文後半 (outro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={3} value={slide3Text.outro} onChange={e => setSlide3Text({ ...slide3Text, outro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide3Text.outroSize} onChange={e => setSlide3Text({ ...slide3Text, outroSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentSlide === 3 && (
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[var(--color-navy)] flex items-center gap-2"><span className="bg-[var(--color-gold)] text-[var(--color-navy)] w-5 h-5 rounded-full flex items-center justify-center text-xs">4</span> AI × 教育</h3>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">タイトル (title)</label>
                                        <div className="flex flex-col gap-2">
                                            <input type="text" value={slide4Text.title} onChange={e => setSlide4Text({ ...slide4Text, title: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide4Text.titleSize} onChange={e => setSlide4Text({ ...slide4Text, titleSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-5xl">中</option>
                                                <option value="text-6xl">大</option>
                                                <option value="text-7xl">特大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">導入文 (intro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={3} value={slide4Text.intro} onChange={e => setSlide4Text({ ...slide4Text, intro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide4Text.introSize} onChange={e => setSlide4Text({ ...slide4Text, introSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">ハイライト (highlight)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={2} value={slide4Text.highlight} onChange={e => setSlide4Text({ ...slide4Text, highlight: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm border-2 border-l-[var(--color-gold)] focus:border-[var(--color-gold)]" />
                                            <select value={slide4Text.highlightSize} onChange={e => setSlide4Text({ ...slide4Text, highlightSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-[44px]">中</option>
                                                <option value="text-5xl">大</option>
                                                <option value="text-6xl">特大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">結び文 (outro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={4} value={slide4Text.outro} onChange={e => setSlide4Text({ ...slide4Text, outro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide4Text.outroSize} onChange={e => setSlide4Text({ ...slide4Text, outroSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentSlide === 4 && (
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[var(--color-navy)] flex items-center gap-2"><span className="bg-[var(--color-gold)] text-[var(--color-navy)] w-5 h-5 rounded-full flex items-center justify-center text-xs">5</span> AI × お金と時間</h3>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">タイトル (title)</label>
                                        <div className="flex flex-col gap-2">
                                            <input type="text" value={slide5Text.title} onChange={e => setSlide5Text({ ...slide5Text, title: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide5Text.titleSize} onChange={e => setSlide5Text({ ...slide5Text, titleSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-5xl">中</option>
                                                <option value="text-6xl">大</option>
                                                <option value="text-7xl">特大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">導入文 (intro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={4} value={slide5Text.intro} onChange={e => setSlide5Text({ ...slide5Text, intro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide5Text.introSize} onChange={e => setSlide5Text({ ...slide5Text, introSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">ハイライト行</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={2} value={slide5Text.highlight} onChange={e => setSlide5Text({ ...slide5Text, highlight: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm border-2 border-l-[var(--color-gold)] focus:border-[var(--color-gold)]" />
                                            <div className="flex gap-2">
                                                <select title="Highlight Size" value={slide5Text.highlightSize} onChange={e => setSlide5Text({ ...slide5Text, highlightSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                    <option value="text-3xl">小</option>
                                                    <option value="text-4xl">中</option>
                                                    <option value="text-5xl">大</option>
                                                </select>
                                                <input title="Suffix" type="text" value={slide5Text.suffix} onChange={e => setSlide5Text({ ...slide5Text, suffix: e.target.value })} className="w-16 text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                                <select title="Suffix Size" value={slide5Text.suffixSize} onChange={e => setSlide5Text({ ...slide5Text, suffixSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                    <option value="text-2xl">小</option>
                                                    <option value="text-4xl">中</option>
                                                    <option value="text-5xl">大</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">結び文 (outro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={4} value={slide5Text.outro} onChange={e => setSlide5Text({ ...slide5Text, outro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide5Text.outroSize} onChange={e => setSlide5Text({ ...slide5Text, outroSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentSlide === 5 && (
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[var(--color-navy)] flex items-center gap-2"><span className="bg-[var(--color-gold)] text-[var(--color-navy)] w-5 h-5 rounded-full flex items-center justify-center text-xs">6</span> コアメッセージ</h3>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">導入文 (intro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={3} value={slide6Text.intro} onChange={e => setSlide6Text({ ...slide6Text, intro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)] focus:ring-[var(--color-gold)]" />
                                            <select value={slide6Text.introSize} onChange={e => setSlide6Text({ ...slide6Text, introSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">ハイライト 1</label>
                                        <div className="flex flex-col gap-2">
                                            <input type="text" value={slide6Text.highlight1} onChange={e => setSlide6Text({ ...slide6Text, highlight1: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm border-2 border-l-[var(--color-gold)] focus:border-[var(--color-gold)]" />
                                            <select value={slide6Text.highlight1Size} onChange={e => setSlide6Text({ ...slide6Text, highlight1Size: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-5xl">中</option>
                                                <option value="text-6xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">結び文 1 (outro1)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={2} value={slide6Text.outro1} onChange={e => setSlide6Text({ ...slide6Text, outro1: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide6Text.outro1Size} onChange={e => setSlide6Text({ ...slide6Text, outro1Size: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-3xl">小</option>
                                                <option value="text-4xl">中</option>
                                                <option value="text-5xl">大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">ハイライト 2 (highlight2)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={2} value={slide6Text.highlight2} onChange={e => setSlide6Text({ ...slide6Text, highlight2: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm border-2 border-l-[var(--color-gold)] focus:border-[var(--color-gold)]" />
                                            <select value={slide6Text.highlight2Size} onChange={e => setSlide6Text({ ...slide6Text, highlight2Size: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-5xl">中</option>
                                                <option value="text-6xl">大</option>
                                                <option value="text-7xl">特大</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {currentSlide === 6 && (
                                <div className="space-y-4">
                                    <h3 className="font-semibold text-[var(--color-navy)] flex items-center gap-2"><span className="bg-[var(--color-gold)] text-[var(--color-navy)] w-5 h-5 rounded-full flex items-center justify-center text-xs">7</span> クロージング</h3>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">タイトル (title)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={2} value={slide7Text.title} onChange={e => setSlide7Text({ ...slide7Text, title: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide7Text.titleSize} onChange={e => setSlide7Text({ ...slide7Text, titleSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-5xl">中</option>
                                                <option value="text-6xl">大</option>
                                                <option value="text-7xl">特大</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <label className="block text-xs font-medium text-gray-700 mb-2">結び文 (outro)</label>
                                        <div className="flex flex-col gap-2">
                                            <textarea rows={4} value={slide7Text.outro} onChange={e => setSlide7Text({ ...slide7Text, outro: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm focus:border-[var(--color-gold)]" />
                                            <select value={slide7Text.outroSize} onChange={e => setSlide7Text({ ...slide7Text, outroSize: e.target.value })} className="w-full text-sm border-gray-300 rounded-md shadow-sm">
                                                <option value="text-4xl">小</option>
                                                <option value="text-5xl">中</option>
                                                <option value="text-6xl">大</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <ImageIcon size={14} /> 1枚目（表紙）の背景画像
                                    </h3>
                                    <label className="flex items-center justify-center w-full h-16 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 overflow-hidden relative">
                                        {coverImage ? (
                                            <>
                                                <img src={coverImage} alt="Cover" className="absolute object-cover w-full h-full opacity-30" />
                                                <span className="relative z-10 text-xs font-medium text-[#1A2238]">画像を変更</span>
                                            </>
                                        ) : (
                                            <div className="flex flex-col items-center text-gray-400">
                                                <Upload size={16} />
                                                <span className="text-xs mt-1">アップロード</span>
                                            </div>
                                        )}
                                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, setCoverImage)} />
                                    </label>
                                </div>

                                <div>
                                    <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                                        <ImageIcon size={14} /> 8枚目（プロフ）の画像
                                    </h3>
                                    <label className="flex items-center justify-center w-full h-16 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 overflow-hidden relative">
                                        {profileImage ? (
                                            <>
                                                <img src={profileImage} alt="Profile" className="absolute object-cover w-full h-full opacity-30" />
                                                <span className="relative z-10 text-xs font-medium text-[#1A2238]">画像を変更</span>
                                            </>
                                        ) : (
                                            <div className="flex flex-col items-center text-gray-400">
                                                <Upload size={16} />
                                                <span className="text-xs mt-1">アップロード</span>
                                            </div>
                                        )}
                                        <input type="file" className="hidden" accept="image/*" onChange={(e) => handleImageUpload(e, setProfileImage)} />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Preview Area */}
                    <div className="flex-grow bg-[#E5E7EB] rounded-xl flex items-center justify-center p-8 relative overflow-hidden">

                        {/* Scale Wrapper for 1080x1350 preview */}
                        <div className="relative" style={{ width: '400px', height: '500px' }}>
                            <div className="absolute top-0 left-0 origin-top-left shadow-2xl" style={{ transform: 'scale(0.37037)', width: '1080px', height: '1350px' }}>

                                {/* Slide 1: Cover */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                    <SlideContainer index={0}>
                                        <div className="z-10 text-center flex flex-col items-center mt-20">
                                            {slide1Text.showSubtitle && (
                                                <p className={`${slide1Text.subtitleSize} font-bold leading-relaxed tracking-[0.15em] text-[var(--color-gold)] opacity-90 drop-shadow-md mb-8 whitespace-pre-wrap`}>
                                                    {slide1Text.subtitle}
                                                </p>
                                            )}
                                            <h1 className={`${slide1Text.title1Size} font-bold leading-tight tracking-[0.1em] text-white mb-20 whitespace-pre-wrap text-shadow-lg flex flex-col items-center gap-4`}>
                                                {slide1Text.title1}<br />
                                                <span className={`${slide1Text.title2Size} text-[var(--color-gold)]`}>{slide1Text.title2}</span>
                                            </h1>
                                            <div className="w-32 border-t-2 border-[var(--color-gold)] mb-20 rounded-full"></div>
                                        </div>
                                    </SlideContainer>
                                </div>

                                {/* Slide 2: Problem */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                    <SlideContainer index={1}>
                                        <div className="text-left w-full px-16">
                                            <p className={`${slide2Text.introSize} leading-[2.6] tracking-wider text-white opacity-90 mb-16 whitespace-pre-wrap`}>
                                                {slide2Text.intro}
                                            </p>
                                            <div className="bg-white/5 p-10 rounded-2xl border border-[var(--color-gold)]/30 mb-16">
                                                <ul className={`${slide2Text.listSize} leading-[2.2] tracking-wider text-[var(--color-gold)] opacity-90 list-disc list-inside space-y-4`}>
                                                    <li>{slide2Text.list1}</li>
                                                    <li>{slide2Text.list2}</li>
                                                    <li>{slide2Text.list3}</li>
                                                </ul>
                                            </div>
                                            <p className={`${slide2Text.highlightSize} leading-[2.2] tracking-wider text-white font-bold drop-shadow-md whitespace-pre-wrap`}>
                                                {slide2Text.highlight}
                                            </p>
                                            <p className={`${slide2Text.outroSize} leading-[2.2] tracking-wider text-white opacity-80 mt-6 whitespace-pre-wrap`}>
                                                {slide2Text.outro}
                                            </p>
                                        </div>
                                    </SlideContainer>
                                </div>

                                {/* Slide 3: Meeting AI */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 2 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                    <SlideContainer index={2}>
                                        <div className="text-center w-full px-8">
                                            <h2 className={`${slide3Text.titleSize} font-bold leading-relaxed tracking-[0.1em] text-[var(--color-gold)] mt-12 mb-20 drop-shadow-md whitespace-pre-wrap`}>
                                                {slide3Text.title}
                                            </h2>
                                            <div className="w-24 border-t border-[var(--color-gold)] mx-auto mb-20 opacity-60"></div>
                                            <p className="leading-[2.6] tracking-wider text-white opacity-90">
                                                <span className={`${slide3Text.introSize} whitespace-pre-wrap`}>{slide3Text.intro}</span><br />
                                                <span className={`${slide3Text.highlightSize} text-[var(--color-gold)] font-bold inline-block mt-4 mb-4 drop-shadow-sm border-b-2 border-[var(--color-gold)] pb-2 whitespace-pre-wrap`}>{slide3Text.highlight}</span><br />
                                                <span className={`${slide3Text.outroSize} whitespace-pre-wrap`}>{slide3Text.outro}</span>
                                            </p>
                                        </div>
                                    </SlideContainer>
                                </div>

                                {/* Slide 4: AI x Education */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 3 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                    <SlideContainer index={3}>
                                        <div className="w-full h-full flex flex-col justify-center px-8">
                                            <div className="flex items-center gap-8 mb-16">
                                                <h2 className={`${slide4Text.titleSize} font-bold tracking-[0.1em] text-[var(--color-gold)] uppercase drop-shadow-md pb-2 border-b-2 border-[var(--color-gold)]/50 inline-block pr-12`}>
                                                    {slide4Text.title}
                                                </h2>
                                            </div>
                                            <p className="leading-[2.5] tracking-wider text-white opacity-90 mb-12">
                                                <span className={`${slide4Text.introSize} whitespace-pre-wrap`}>{slide4Text.intro}</span><br />
                                                <span className={`${slide4Text.highlightSize} font-bold text-[var(--color-gold)] inline-block mt-4 mb-4 leading-normal whitespace-pre-wrap`}>
                                                    {slide4Text.highlight}
                                                </span>
                                            </p>
                                            <div className="bg-white/5 p-10 rounded-2xl border border-white/20">
                                                <p className={`${slide4Text.outroSize} leading-[2.5] tracking-wider text-white opacity-90 whitespace-pre-wrap`}>
                                                    {slide4Text.outro}
                                                </p>
                                            </div>
                                        </div>
                                    </SlideContainer>
                                </div>

                                {/* Slide 5: AI x Money & Time */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 4 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                    <SlideContainer index={4}>
                                        <div className="w-full h-full flex flex-col justify-center px-8">
                                            <div className="flex items-center gap-8 mb-16">
                                                <h2 className={`${slide5Text.titleSize} font-bold tracking-[0.1em] text-[var(--color-gold)] uppercase drop-shadow-md pb-2 border-b-2 border-[var(--color-gold)]/50 inline-block pr-12`}>
                                                    {slide5Text.title}
                                                </h2>
                                            </div>
                                            <p className="leading-[2.5] tracking-wider text-white opacity-90 mb-12">
                                                <span className={`${slide5Text.introSize} whitespace-pre-wrap`}>{slide5Text.intro}</span><br />
                                                <span className="font-bold text-[var(--color-gold)] inline-flex mt-2 mb-2 items-baseline">
                                                    <span className={`${slide5Text.highlightSize} whitespace-pre-wrap`}>{slide5Text.highlight}</span>
                                                    <span className={`${slide5Text.suffixSize} text-white font-normal whitespace-pre-wrap`}>{slide5Text.suffix}</span>
                                                </span><br />
                                                <span className={`${slide5Text.outroSize} whitespace-pre-wrap`}>{slide5Text.outro}</span>
                                            </p>
                                        </div>
                                    </SlideContainer>
                                </div>

                                {/* Slide 6: Core Message */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 5 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                    <SlideContainer index={5}>
                                        <div className="w-full text-center z-10">
                                            <p className="leading-[2.5] tracking-wider text-white opacity-90 mb-16">
                                                <span className={`${slide6Text.introSize} whitespace-pre-wrap`}>{slide6Text.intro}</span><br />
                                                <span className={`${slide6Text.highlight1Size} font-bold text-[var(--color-gold)] inline-block mt-2 mb-2 whitespace-pre-wrap`}>{slide6Text.highlight1}</span>
                                            </p>
                                            <div className="bg-white/5 p-10 rounded-2xl border border-[var(--color-gold)]/40 shadow-lg">
                                                <p className="leading-[2.5] tracking-wider text-white opacity-90">
                                                    <span className={`${slide6Text.outro1Size} whitespace-pre-wrap`}>{slide6Text.outro1}</span><br />
                                                    <span className={`${slide6Text.highlight2Size} font-bold text-[var(--color-gold)] inline-block mt-8 whitespace-pre-wrap`}>{slide6Text.highlight2}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </SlideContainer>
                                </div>

                                {/* Slide 7: Ask the reader */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 6 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                    <SlideContainer index={6}>
                                        <div className="w-full text-center z-10">
                                            <h2 className={`${slide7Text.titleSize} font-bold leading-relaxed tracking-[0.1em] text-[var(--color-gold)] mb-20 drop-shadow-md whitespace-pre-wrap`}>
                                                {slide7Text.title}
                                            </h2>
                                            <div className="w-24 border-t border-[var(--color-gold)] mx-auto mb-20 opacity-60"></div>
                                            <p className={`${slide7Text.outroSize} leading-[2.5] tracking-wider text-white opacity-90 drop-shadow-md whitespace-pre-wrap`}>
                                                {slide7Text.outro}
                                            </p>
                                        </div>
                                    </SlideContainer>
                                </div>

                                {/* Slide 8: Profile */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 7 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                    <SlideContainer index={7}>
                                        <div className="w-full flex flex-col items-center">
                                            <div className="w-80 h-80 rounded-full overflow-hidden border-[6px] border-[var(--color-gold)] mb-12 shadow-[0_0_30px_rgba(212,175,55,0.3)] relative bg-white/5">
                                                {profileImage ? (
                                                    <img src={profileImage} alt="Maki Katsume" className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex flex-col items-center justify-center text-white/40">
                                                        <ImageIcon size={64} className="mb-4" />
                                                        <span className="text-lg">画像を<br />アップロード</span>
                                                    </div>
                                                )}
                                            </div>
                                            <h2 className="text-6xl font-bold tracking-[0.2em] text-white mb-6">勝目 槙</h2>
                                            <p className="text-3xl text-[var(--color-gold)] font-medium mb-16 tracking-[0.2em] drop-shadow-md">MAKI KATSUME | おうちCFO</p>

                                            <div className="w-[90%] bg-white/5 backdrop-blur-sm p-12 rounded-3xl border border-[var(--color-gold)]/40 shadow-xl flex flex-col items-center relative">
                                                <div className="text-left w-fit">
                                                    <p className="font-bold text-[var(--color-gold)] text-3xl mb-8">元銀行員FPライター/2児のママ/AI活用</p>
                                                    <p className="text-3xl leading-[2.2] tracking-wider text-white opacity-90">
                                                        銀行員・FPとしての金融知見と、<br />
                                                        自らAIで学習アプリを作る実践力で、<br />
                                                        知的でエレガントな「AI活用術」を<br />
                                                        お届けします。
                                                    </p>
                                                    <p className="text-3xl text-[var(--color-gold)] font-bold mt-12 text-center w-full">
                                                        一緒に、家族の未来をデザインしませんか？
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SlideContainer>
                                </div>

                                {/* Slide 9: Ending */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${currentSlide === 8 ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
                                    <SlideContainer index={8}>
                                        <div className="w-full text-center mt-12">
                                            <p className="text-5xl leading-[2.2] tracking-wider text-white opacity-90 mb-20 text-shadow-md">
                                                Instagramの発信では、<br />
                                                <span className="text-[var(--color-gold)] font-bold inline-block mt-4 mb-2 text-[42px]">『AIを使った具体的な家計管理』</span>や<br />
                                                <span className="text-[var(--color-gold)] font-bold inline-block mb-4 text-[42px]">『我が子専用のAI学習ツール作り』</span>の<br />
                                                ヒントをお伝えしていきます。
                                            </p>

                                            <p className="text-4xl leading-[2.5] tracking-wider text-white opacity-80 mb-24">
                                                どうぞお楽しみに！
                                            </p>

                                            <div className="inline-block bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/60 rounded-full px-16 py-8 mb-24 shadow-lg backdrop-blur-sm">
                                                <p className="text-4xl text-white font-medium tracking-widest leading-[1.8] flex items-center justify-center gap-4">
                                                    <span>
                                                        まずは<span className="text-[var(--color-gold)] font-bold">保存</span>して、<br />
                                                        あなたの人生を動かす第一歩にしてください
                                                    </span>
                                                    <Feather size={40} className="text-[var(--color-gold)] opacity-80" />
                                                </p>
                                            </div>

                                            {/* Mockup Instagram actions */}
                                            <div className="flex justify-center gap-16 text-white mt-4 opacity-80">
                                                <div className="flex flex-col items-center gap-4">
                                                    <div className="w-24 h-24 border-[3px] border-white/80 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                                                    </div>
                                                    <span className="text-2xl font-medium tracking-widest">いいね</span>
                                                </div>
                                                <div className="flex flex-col items-center gap-4">
                                                    <div className="w-24 h-24 border-[3px] border-white/80 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-colors">
                                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                    </div>
                                                    <span className="text-2xl font-medium tracking-widest">保存</span>
                                                </div>
                                            </div>
                                        </div>
                                    </SlideContainer>
                                </div>

                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {currentSlide > 0 && (
                            <button
                                onClick={() => setCurrentSlide(s => s - 1)}
                                className="absolute left-4 top-1/2 -mt-6 p-2 bg-white/80 hover:bg-white rounded-full shadow-md text-[#1A2238] transition z-20"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}
                        {currentSlide < 8 && (
                            <button
                                onClick={() => setCurrentSlide(s => s + 1)}
                                className="absolute right-4 top-1/2 -mt-6 p-2 bg-white/80 hover:bg-white rounded-full shadow-md text-[#1A2238] transition z-20"
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}

                        {/* Page Dots */}
                        <div className="absolute bottom-6 flex gap-2 z-20">
                            {Array.from({ length: 9 }).map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${currentSlide === i ? 'bg-[#1A2238] scale-125' : 'bg-gray-400 opacity-50 hover:bg-gray-600'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
