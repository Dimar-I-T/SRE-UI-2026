import DocumentationSlider from "./DocumentationSlider";
import Reveal from "@/components/Reveal";

interface Props {
  category: string;
  division: string;
  title: string;
  description: string;
  images: string[];
  wideBottomText?: string;
}


export default function ActivitySection({
  category,
  division,
  title,
  description,
  images,
  wideBottomText,
}: Props) {
  return (
    <section className="flex flex-col gap-6">

      {/* HEADER */}
      <Reveal>
        <div className="flex flex-col gap-1">

          <p className="text-[#7dc142] font-semibold text-sm lg:text-base tracking-[0.18em] uppercase">
            {category}
          </p>

          <h2 className="text-[#105D48] text-3xl lg:text-5xl font-bold italic leading-tight">
            {division}
          </h2>

        </div>
      </Reveal>

      {/* MAIN CARD */}
      <Reveal>
        <div
          className="
            bg-white/75
            backdrop-blur-md
            border border-[#dce9d7]
            rounded-[34px]
            p-6 lg:p-8
            shadow-[0_15px_40px_rgba(16,93,72,0.08)]
            flex flex-col gap-2 lg:gap-6
          "
        >

          {/* TITLE */}
          <div className="flex flex-col items-center text-center gap-3">

            <div className="w-16 h-[3px] rounded-full bg-[#7dc142]" />

            <h3
              className="
                text-[#105D48]
                text-2xl lg:text-3xl
                font-bold
                leading-tight
              "
            >
              {title}
            </h3>

          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">

            {/* DESCRIPTION */}
            <div className="flex items-center h-full">
            <div className="flex flex-col gap-5">

                <p
                className="
                    whitespace-pre-line
                    text-gray-700
                    text-[15px] lg:text-[16px]
                    leading-[1.8]
                    text-justify
                "
                >
                {description}
                </p>

            </div>
            </div>

            {/* DOCUMENTATION */}
            <div
              className="
                overflow-hidden
                rounded-[28px]
                bg-white/35
                backdrop-blur-xl
                border border-white/40
                shadow-[0_12px_30px_rgba(16,93,72,0.10)]
              "
            >
              <DocumentationSlider images={images} />
            </div>

          </div>
         {/* FULL WIDTH BOTTOM TEXT */}
            {wideBottomText && (
            <div>
                <p
                className="
                    whitespace-pre-line
                    text-gray-700
                    text-[15px] lg:text-[16px]
                    leading-[1.8]
                    text-justify
                "
                >
                {wideBottomText}
                </p>
            </div>
            )}
        </div>
      </Reveal>

    </section>
  );
}