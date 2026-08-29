'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useMemo, useState } from 'react';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/content/data/site';

type Category = 'all' | 'women' | 'men' | 'corporate';

const categoryLabels: { value: Category; label: string }[] = [
  { value: 'all', label: 'Tất cả' },
  { value: 'women', label: 'Vest nữ' },
  { value: 'men', label: 'Vest nam' },
  { value: 'corporate', label: 'Doanh nghiệp' },
];

const serviceLooks = [
  {
    category: 'women' as Category,
    image: '/images/product-women-piped-editorial.webp',
    alt: 'Hai mẫu vest nữ công sở màu xám và đen',
    label: 'Executive Women',
    title: 'Vest nữ định hình phong thái',
    ratio: 'portrait',
  },
  {
    category: 'men' as Category,
    image: '/images/product-men-blue-suit.webp',
    alt: 'Nam giới mặc bộ vest xanh navy',
    label: 'Executive Men',
    title: 'Vest nam cho môi trường chuyên nghiệp',
    ratio: 'portrait',
  },
  {
    category: 'corporate' as Category,
    image: '/images/product-uniform-sketch.webp',
    alt: 'Mẫu vest xám phối viền trên mannequin',
    label: 'Corporate Teams',
    title: 'Hình ảnh đồng bộ cho đội ngũ',
    ratio: 'square',
  },
  {
    category: 'men' as Category,
    image: '/images/product-wedding-suit.webp',
    alt: 'Nam giới mặc bộ vest caro sáng màu ngoài phố',
    label: 'Occasion',
    title: 'Chỉn chu trong những dịp quan trọng',
    ratio: 'landscape',
  },
  {
    category: 'women' as Category,
    image: '/images/product-women-vest-skirt.webp',
    alt: 'Nữ giới mặc áo gile và chân váy công sở màu đen',
    label: 'Office Wardrobe',
    title: 'Tủ đồ công sở có chủ đích',
    ratio: 'portrait',
  },
  {
    category: 'corporate' as Category,
    image: '/images/product-men-mannequin-blue.webp',
    alt: 'Mẫu vest xanh trên mannequin',
    label: 'Corporate Tailoring',
    title: 'Phom dáng thống nhất, vẫn vừa vặn từng người',
    ratio: 'square',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Định hình nhận diện',
    body: 'Tìm hiểu vai trò, bối cảnh sử dụng và hình ảnh bạn muốn thể hiện trước khi đề xuất thiết kế.',
    image: '/images/product-uniform-sketch.webp',
    alt: 'Mẫu vest xám phối viền trên mannequin',
  },
  {
    number: '02',
    title: 'Dựng phom & may',
    body: 'Lấy số đo, cân chỉnh tỷ lệ vai, eo và chiều dài để tạo nên một phom dáng phù hợp với hình thể.',
    image: '/images/product-men-mannequin-blue.webp',
    alt: 'Mẫu vest xanh trên mannequin',
  },
  {
    number: '03',
    title: 'Thử & tinh chỉnh',
    body: 'Thử trang phục trong chuyển động thực tế, sau đó hoàn thiện những chi tiết cần thiết trước khi bàn giao.',
    image: '/images/product-wedding-suit.webp',
    alt: 'Nam giới mặc bộ vest caro sáng màu ngoài phố',
  },
];

const featuredLooks = [
  { image: '/images/product-women-piped-studio.webp', alt: 'Nữ giới mặc bộ vest đen công sở', label: 'Women', title: 'Black Executive Suit' },
  { image: '/images/product-men-black-suit.webp', alt: 'Nam giới mặc bộ vest đen hai hàng khuy', label: 'Men', title: 'Double-breasted Black' },
  { image: '/images/product-trousers-beige.webp', alt: 'Quần tây nam may đo màu be', label: 'Details', title: 'Tailored Trousers' },
  { image: '/images/product-men-blue-suit.webp', alt: 'Nam giới mặc bộ vest xanh navy', label: 'Men', title: 'Navy Business Suit' },
];

const journalPosts = [
  {
    image: '/images/product-women-piped-editorial.webp',
    alt: 'Hai mẫu vest nữ màu xám và đen',
    category: 'Style Guide',
    title: 'Vest nữ công sở nên chọn phom nào?',
    summary: 'Gợi ý cân đối vai, eo và chiều dài áo theo môi trường làm việc.',
  },
  {
    image: '/images/product-men-mannequin-blue.webp',
    alt: 'Mẫu vest xanh trên mannequin',
    category: 'Tailoring Knowledge',
    title: 'Suit may đo khác suit may sẵn như thế nào?',
    summary: 'Khác biệt nằm ở cách phom dáng được xây dựng quanh cơ thể người mặc.',
  },
  {
    image: '/images/product-uniform-sketch.webp',
    alt: 'Mẫu vest xám phối viền trên mannequin',
    category: 'Corporate Uniform',
    title: 'Xây dựng đồng phục theo nhận diện thương hiệu',
    summary: 'Từ màu sắc, chất liệu đến tỷ lệ, mỗi lựa chọn đều góp phần tạo nên hình ảnh đội ngũ.',
  },
];

const audienceLooks = [
  {
    number: '01',
    category: 'Executive Women',
    title: 'Piping đen — đường nét sắc gọn',
    image: '/images/feature-women-piped-front.webp',
    alt: 'Nữ giới mặc vest đen phối viền trắng, chân dung chính diện',
  },
  {
    number: '02',
    category: 'Executive Women',
    title: 'Một phom dáng, nhiều bối cảnh',
    image: '/images/feature-women-piped-seated.webp',
    alt: 'Nữ giới mặc vest đen phối viền trắng trong tư thế ngồi',
  },
  {
    number: '03',
    category: 'Executive Men',
    title: 'Sáng màu cho những cuộc gặp quan trọng',
    image: '/images/feature-men-cream-city.webp',
    alt: 'Nam giới mặc bộ suit ba mảnh màu kem ngoài phố',
  },
  {
    number: '04',
    category: 'Corporate Teams',
    title: 'Một đội ngũ, một hình ảnh',
    image: '/images/feature-men-duo-navy.webp',
    alt: 'Hai nam giới mặc suit màu đen và xanh navy',
  },
];

export function EditorialHome() {
  const [category, setCategory] = useState<Category>('all');
  const [formStatus, setFormStatus] = useState('');

  const filteredLooks = useMemo(
    () => (category === 'all' ? serviceLooks : serviceLooks.filter((look) => look.category === category)),
    [category],
  );

  const submitConsultation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setFormStatus('Đã mở Zalo của HAI Fashion. Vui lòng gửi lời nhắn để hoàn tất yêu cầu tư vấn.');
    window.open(site.zaloUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section id="top" className="relative scroll-mt-24 border-b border-line bg-ground">
        <div className="mx-auto grid min-h-[690px] max-w-wide lg:grid-cols-[43%_57%]">
          <div className="relative z-10 flex flex-col justify-center px-5 py-16 md:px-8 lg:px-10 lg:py-20 xl:px-14">
            <p className="editorial-kicker">HAI Fashion / Veston may đo</p>
            <h1 className="mt-6 font-serif text-display text-espresso">
              May đo
              <span className="block italic text-accent">theo phong thái.</span>
            </h1>
            <p className="mt-8 max-w-[48ch] text-[15px] leading-7 text-ink-soft md:text-base">
              Từ vest công sở đến những dịp quan trọng, HAI tạo nên phom dáng chỉn chu và vừa vặn với cách bạn xuất hiện.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 sm:gap-5">
              <Link href="#dich-vu" className="inline-flex min-h-[52px] items-center justify-center bg-espresso px-6 text-[10px] font-medium uppercase tracking-[0.18em] text-ground transition-colors duration-300 hover:bg-accent sm:px-7">
                Khám phá dịch vụ
              </Link>
              <Link href="#quy-trinh" className="inline-flex min-h-[52px] items-center border-b border-espresso text-[10px] font-medium uppercase tracking-[0.18em] text-espresso transition-colors duration-300 hover:text-accent">
                Xem quy trình
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-navy lg:min-h-[690px]">
            <Image
              src="/images/hai-fashion-hero-may-do.webp"
              alt="Người đàn ông mặc vest caro may đo trên phố"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 57vw"
              className="object-cover object-[50%_50%] md:scale-[1.35] md:object-[45%_50%] lg:scale-100 lg:object-[31%_50%]"
            />
            <div className="absolute inset-y-0 right-0 w-[20%] border-l border-white/15 bg-navy md:w-[28%] lg:hidden" />
            <div className="absolute inset-y-0 right-0 hidden w-[16%] border-l border-white/15 bg-navy lg:flex lg:flex-col lg:items-center lg:justify-end lg:pb-12">
              <p className="[writing-mode:vertical-rl] rotate-180 text-[9px] uppercase tracking-[0.28em] text-white/75">Executive tailoring · TP.HCM</p>
            </div>
            <div className="absolute bottom-0 left-0 flex h-12 items-center bg-ground px-5 text-[9px] uppercase tracking-[0.2em] text-ink-muted md:px-8 lg:h-14 lg:px-10">
              Tailored for the way you lead
            </div>
          </div>
        </div>
      </section>

      <section id="dich-vu" className="scroll-mt-24 bg-surface py-section-md lg:py-section-lg">
        <div className="mx-auto max-w-container px-5 md:px-8 lg:px-10">
          <Reveal className="grid gap-8 border-b border-line pb-14 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div>
              <p className="editorial-kicker">Executive tailoring &amp; corporate workwear</p>
              <h2 className="mt-5 max-w-[15ch] text-[clamp(42px,6.3vw,82px)] leading-[0.95] text-espresso">Được tạo nên cho vai trò của bạn.</h2>
            </div>
            <p className="max-w-[58ch] text-[15px] leading-7 text-ink-soft md:justify-self-end">
              Mỗi bộ trang phục bắt đầu từ vóc dáng thực tế, môi trường sử dụng và hình ảnh người mặc muốn thể hiện — dành cho nữ quản lý, nam chuyên nghiệp và đội ngũ doanh nghiệp.
            </p>
          </Reveal>

          <Reveal className="mt-12 grid gap-4 lg:grid-cols-[1.06fr_0.94fr]" delay={60}>
            <article className="group relative min-h-[570px] overflow-hidden bg-surface-2 lg:min-h-[650px]">
              <Image
                src={audienceLooks[0].image}
                alt={audienceLooks[0].alt}
                fill
                sizes="(max-width: 1023px) 100vw, 54vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-espresso/90 px-5 py-5 text-band-ink md:px-7">
                <p className="text-[9px] uppercase tracking-[0.18em] text-bronze">{audienceLooks[0].number} / {audienceLooks[0].category}</p>
                <h3 className="mt-2 font-sans text-xl font-normal">{audienceLooks[0].title}</h3>
              </div>
            </article>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {audienceLooks.slice(1, 3).map((look) => (
                <article key={look.title} className="group relative aspect-[4/5] overflow-hidden bg-surface-2">
                  <Image
                    src={look.image}
                    alt={look.alt}
                    fill
                    sizes="(max-width: 639px) 50vw, (max-width: 1023px) 45vw, 23vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-espresso/90 px-4 py-4 text-band-ink">
                    <p className="text-[9px] uppercase tracking-[0.16em] text-bronze">{look.number} / {look.category}</p>
                    <h3 className="mt-1 font-sans text-[13px] font-normal leading-5">{look.title}</h3>
                  </div>
                </article>
              ))}
              <article className="group relative aspect-[2/1] overflow-hidden bg-surface-2 sm:col-span-2">
                <Image
                  src={audienceLooks[3].image}
                  alt={audienceLooks[3].alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 43vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-espresso/90 px-4 py-4 text-band-ink md:px-5">
                  <p className="text-[9px] uppercase tracking-[0.16em] text-bronze">{audienceLooks[3].number} / {audienceLooks[3].category}</p>
                  <h3 className="mt-1 font-sans text-[13px] font-normal leading-5">{audienceLooks[3].title}</h3>
                </div>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="bo-suu-tap" className="scroll-mt-24 bg-ground py-section-md lg:py-section-lg">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-10 xl:px-14">
          <Reveal className="flex flex-col gap-7 border-b border-line pb-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="editorial-kicker">Dịch vụ &amp; bộ sưu tập</p>
              <h2 className="mt-4 text-h1 text-espresso">Một tủ đồ, nhiều vai trò.</h2>
            </div>
            <div className="flex max-w-full gap-6 overflow-x-auto" role="group" aria-label="Lọc bộ sưu tập">
              {categoryLabels.map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setCategory(item.value)}
                  aria-pressed={category === item.value}
                  className={`min-h-[44px] shrink-0 border-b text-[10px] font-medium uppercase tracking-[0.16em] transition-colors ${
                    category === item.value ? 'border-espresso text-espresso' : 'border-transparent text-ink-muted hover:text-espresso'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[260px] sm:grid-cols-2 lg:auto-rows-[310px] lg:grid-cols-4">
            {filteredLooks.map((look, index) => (
              <Reveal
                key={`${category}-${look.title}`}
                delay={Math.min(index * 45, 135)}
                className={`${index === 0 ? 'sm:row-span-2 lg:col-span-2' : ''} ${look.ratio === 'landscape' ? 'lg:col-span-2' : ''}`}
              >
                <article className="group relative h-full min-h-[220px] overflow-hidden bg-surface-2">
                  <Image src={look.image} alt={look.alt} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]" />
                  <div className="absolute inset-x-0 bottom-0 bg-espresso/90 px-5 py-4 text-band-ink">
                    <p className="text-[9px] uppercase tracking-[0.18em] text-bronze">{look.label}</p>
                    <h3 className="mt-1 font-sans text-[14px] font-normal">{look.title}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-section-md text-white lg:py-section-lg">
        <div className="mx-auto max-w-container px-5 md:px-8 lg:px-10">
          <Reveal className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-bronze">Why HAI Fashion</p>
              <h2 className="mt-6 max-w-[11ch] text-[clamp(48px,8vw,104px)] leading-[0.88] text-white">Một bộ đồ tốt <span className="block italic text-bronze">bắt đầu từ đúng tỷ lệ.</span></h2>
            </div>
            <div className="grid grid-cols-2 border-l border-white/20">
              {['Đúng phom', 'Đúng chất liệu', 'Đúng bối cảnh', 'Đúng khí chất'].map((item, index) => (
                <div key={item} className="border-b border-r border-white/20 px-5 py-7 sm:px-7">
                  <span className="text-[9px] tracking-[0.18em] text-white/45">0{index + 1}</span>
                  <p className="mt-5 font-serif text-2xl text-white">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="doi-tuong" className="bg-surface py-section-md lg:py-section-lg">
        <div className="mx-auto max-w-container px-5 md:px-8 lg:px-10">
          <Reveal className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="editorial-kicker">Dành cho người mặc thật</p>
              <h2 className="mt-5 text-h1 text-espresso">May đo theo vị trí bạn đang đảm nhiệm.</h2>
              <p className="mt-5 max-w-[44ch] text-sm leading-7 text-ink-soft">Thiết kế thay đổi theo vai trò, tần suất sử dụng và mức độ trang trọng — không áp một công thức cho mọi khách hàng.</p>
            </div>
            <div className="border-t border-line-strong">
              {['Ban điều hành', 'Quản lý', 'Chuyên gia', 'Đội ngũ kinh doanh', 'Đồng phục doanh nghiệp', 'Sự kiện và lễ cưới'].map((item, index) => (
                <div key={item} className="group flex items-center justify-between gap-5 border-b border-line py-5 md:py-6">
                  <div className="flex items-baseline gap-5">
                    <span className="w-6 text-[9px] tracking-[0.15em] text-accent">0{index + 1}</span>
                    <h3 className="text-[clamp(25px,3.5vw,42px)] text-espresso transition-transform duration-300 group-hover:translate-x-2">{item}</h3>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.16em] text-ink-muted">Theo yêu cầu</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="quy-trinh" className="scroll-mt-24 bg-ground py-section-md lg:py-section-lg">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-10 xl:px-14">
          <Reveal className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="editorial-kicker">Quy trình may đo</p>
              <h2 className="mt-5 max-w-[12ch] text-[clamp(42px,6vw,76px)] leading-[0.95] text-espresso">Từ ý niệm đến một phom dáng vừa vặn.</h2>
            </div>
            <p className="max-w-[52ch] text-sm leading-7 text-ink-soft md:justify-self-end">Một quy trình có đối thoại, quan sát và tinh chỉnh để trang phục phù hợp cả khi đứng, ngồi và di chuyển trong công việc thực tế.</p>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 60}>
                <article className="border-t border-line-strong pt-4">
                  <div className="relative aspect-[4/5] overflow-hidden bg-surface-2">
                    <Image src={step.image} alt={step.alt} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition-transform duration-700 hover:scale-[1.03]" />
                  </div>
                  <div className="mt-5 flex items-start gap-5">
                    <span className="pt-1 text-[10px] tracking-[0.18em] text-accent">{step.number}</span>
                    <div>
                      <h3 className="text-3xl text-espresso">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-ink-soft">{step.body}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="chi-tiet" className="scroll-mt-24 bg-surface py-section-md lg:py-section-lg">
        <div className="mx-auto grid max-w-wide gap-10 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 xl:px-14">
          <Reveal className="grid min-h-[560px] grid-cols-2 gap-3">
            <div className="relative mt-14 overflow-hidden bg-surface-2">
              <Image src="/images/product-trousers-beige.webp" alt="Quần tây nam may đo màu be" fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative mb-14 overflow-hidden bg-surface-2">
              <Image src="/images/product-trousers-navy.webp" alt="Quần tây nam may đo màu navy" fill sizes="25vw" className="object-cover" />
            </div>
          </Reveal>
          <Reveal className="flex flex-col justify-center lg:pl-8" delay={70}>
            <p className="editorial-kicker">Fabric · Construction · Fit · Details</p>
            <h2 className="mt-6 max-w-[12ch] text-[clamp(44px,6vw,76px)] leading-[0.94] text-espresso">Sự khác biệt nằm ở những điều vừa đủ.</h2>
            <p className="mt-7 max-w-[50ch] text-sm leading-7 text-ink-soft">Độ rủ của chất liệu, vị trí cạp quần, chiều dài ống, tỷ lệ vai và cách hoàn thiện từng đường nét đều góp phần tạo nên cảm giác chỉn chu khi mặc.</p>
            <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-6 text-[10px] uppercase tracking-[0.17em] text-ink-soft">
              <span>Chất liệu phù hợp</span><span>Phom dáng cân đối</span><span>Chi tiết có chủ đích</span><span>Hoàn thiện tinh gọn</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="mau-noi-bat" className="scroll-mt-24 bg-ground py-section-md lg:py-section-lg">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-10 xl:px-14">
          <Reveal className="flex items-end justify-between gap-7 border-b border-line pb-7">
            <div>
              <p className="editorial-kicker">Mẫu nổi bật</p>
              <h2 className="mt-4 text-h1 text-espresso">The HAI Edit</h2>
            </div>
            <Link href="#lien-he" className="editorial-link hidden text-espresso sm:inline-flex">Đặt lịch xem mẫu</Link>
          </Reveal>

          <div className="rail mt-8 lg:grid lg:grid-cols-4">
            {featuredLooks.map((look, index) => (
              <Reveal key={look.title} delay={index * 45}>
                <article className="group">
                  <div className="relative aspect-[3/4] overflow-hidden bg-surface-2">
                    <Image src={look.image} alt={look.alt} fill sizes="(max-width: 767px) 78vw, (max-width: 1023px) 40vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                  </div>
                  <p className="mt-4 text-[9px] uppercase tracking-[0.18em] text-accent">{look.label}</p>
                  <h3 className="mt-1 text-2xl text-espresso">{look.title}</h3>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="journal" className="scroll-mt-24 bg-surface py-section-md lg:py-section-lg">
        <div className="mx-auto max-w-wide px-5 md:px-8 lg:px-10 xl:px-14">
          <Reveal className="grid gap-7 border-b border-line pb-7 md:grid-cols-2 md:items-end">
            <div>
              <p className="editorial-kicker">Kiến thức &amp; phong cách</p>
              <h2 className="mt-4 text-h1 text-espresso">Journal</h2>
            </div>
            <p className="max-w-[52ch] text-sm leading-7 text-ink-soft md:justify-self-end">Góc kiến thức giúp lựa chọn trang phục theo vóc dáng, vai trò và bối cảnh sử dụng thực tế.</p>
          </Reveal>

          <div className="mt-8 grid gap-7 md:grid-cols-3">
            {journalPosts.map((post, index) => (
              <Reveal key={post.title} delay={index * 55}>
                <article className="group border-b border-line pb-6">
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-2">
                    <Image src={post.image} alt={post.alt} fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
                  </div>
                  <p className="mt-5 text-[9px] uppercase tracking-[0.18em] text-accent">{post.category}</p>
                  <h3 className="mt-2 text-[28px] leading-[1.05] text-espresso">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink-soft">{post.summary}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="lien-he" className="scroll-mt-24 bg-espresso py-section-md text-band-ink lg:py-section-lg">
        <div className="mx-auto grid max-w-container gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <Reveal>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-bronze">Đặt lịch tư vấn</p>
            <h2 className="mt-6 max-w-[10ch] text-[clamp(48px,7vw,86px)] leading-[0.9] text-band-ink">Trang phục đúng với cách bạn muốn xuất hiện.</h2>
            <p className="mt-7 max-w-[48ch] text-sm leading-7 text-band-soft">Chia sẻ nhu cầu của bạn. HAI Fashion sẽ tiếp tục trao đổi qua Zalo để tư vấn rõ hơn về phong cách, bối cảnh sử dụng và lịch hẹn.</p>
            <div className="mt-8 border-t border-band-line pt-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-bronze">Showroom</p>
              <p className="mt-3 text-sm leading-7 text-band-soft">{site.address.street}, {site.address.ward}, {site.address.city}</p>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="mt-2 inline-block font-serif text-3xl text-band-ink">{site.phone}</a>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <form onSubmit={submitConsultation} className="border-t border-band-line" noValidate={false}>
              <div className="grid gap-x-8 sm:grid-cols-2">
                <label className="block pt-5 text-[9px] uppercase tracking-[0.17em] text-bronze">
                  Họ và tên
                  <input name="name" type="text" required autoComplete="name" placeholder="Tên của bạn" className="editorial-field block" />
                </label>
                <label className="block pt-5 text-[9px] uppercase tracking-[0.17em] text-bronze">
                  Số điện thoại
                  <input name="phone" type="tel" required autoComplete="tel" placeholder="Số điện thoại liên hệ" className="editorial-field block" />
                </label>
              </div>
              <label className="block pt-6 text-[9px] uppercase tracking-[0.17em] text-bronze">
                Nhu cầu tư vấn
                <select name="service" required defaultValue="" className="editorial-field block appearance-none">
                  <option value="" disabled className="text-ink">Chọn dịch vụ phù hợp</option>
                  <option value="vest-nu" className="text-ink">Vest &amp; công sở nữ</option>
                  <option value="vest-nam" className="text-ink">Vest &amp; công sở nam</option>
                  <option value="doanh-nghiep" className="text-ink">Đồng phục doanh nghiệp</option>
                  <option value="khac" className="text-ink">Nhu cầu khác</option>
                </select>
              </label>
              <label className="block pt-6 text-[9px] uppercase tracking-[0.17em] text-bronze">
                Lời nhắn
                <textarea name="message" rows={3} placeholder="Mô tả ngắn bối cảnh sử dụng hoặc số lượng dự kiến" className="editorial-field block resize-none py-4" />
              </label>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="inline-flex min-h-[52px] items-center justify-center bg-bronze px-8 text-[10px] font-medium uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-ground">
                  Tiếp tục qua Zalo
                </button>
                <p aria-live="polite" className="max-w-[40ch] text-xs leading-5 text-band-soft">{formStatus || 'Biểu mẫu không lưu dữ liệu trên website.'}</p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
