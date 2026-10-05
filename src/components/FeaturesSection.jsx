import React, { useState, useEffect, useRef } from "react";

const FeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [itemsVisible, setItemsVisible] = useState(Array(7).fill(false));
  const sectionRef = useRef(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTriggered) {
            setIsVisible(true);
            setHasTriggered(true);
            // Animate feature cards one by one
            itemsVisible.forEach((_, index) => {
              setTimeout(() => {
                setItemsVisible((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasTriggered, itemsVisible]);

  const handleStartTransformation = () => {
    window.open("/form", "_blank");
  };

  // 🎨 Color palette
  const gold = "#C5A100";
  const goldLight = "#FFE085";
  const white = "#fff";
  const headingFont = "Montserrat, Bebas Neue, Anton, Oswald, sans-serif";
  const bodyFont = "Roboto, Open Sans, Arial, sans-serif";

  const CheckIcon = () => (
    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  const features = [
    {
      title: "1-on-1 Coaching with Accountability",
      description:
        "I will help you achieve your transformation goals through personalized coaching, progress tracking, and regular check-ins.",
    },
    {
      title: "Building Habits and Transforming Your Lifestyle",
      description:
        "We will create habits tailored to your routine, helping you become leaner, stronger, and fitter than ever before.",
    },
    {
      title: "Science & Evidence-Based Nutrition",
      description:
        "Our experts calculate your exact nutritional requirements, ensuring your diet is customized for your results.",
    },
    {
      title: "Flexible Dieting You’ll Actually Enjoy",
      description:
        "You can still enjoy your favorite foods like biryani, fried rice, and more while staying on track with your transformation goals.",
    },
    {
      title: "Free Access to DIY 120-Day Program",
      description:
        "Claim your INR 12,000 DIY Program free! Learn how to calculate maintenance calories, customize your plan, and track your progress.",
    },
    {
      title: "Refund Policy",
      description:
        "If you don’t see results as per program guidelines within the promised timeframe, you’re eligible for a full refund.",
    },
    {
      title: "Community Support & Motivation",
      description:
        "Only 15 participants per batch ensuring personalized attention and measurable results for every client.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="scroll-mt-[82px] py-20 relative overflow-hidden"
      style={{
        background: "#050505",
        fontFamily: bodyFont,
        color: white,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <div
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium mb-6 border border-yellow-500/40 backdrop-blur-sm"
            style={{
              background: "rgba(197,161,0,0.15)",
              color: goldLight,
            }}
          >
            <CheckIcon />
            <span className="ml-2 font-semibold tracking-wide">
              Why CoreX Works Differently
            </span>
          </div>

          <h2
            style={{
              fontFamily: headingFont,
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "0.6em",
              textShadow: `
                0 0 12px rgba(255,255,255,0.2),
                0 2px 6px rgba(0,0,0,0.6)
              `,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(-30px)",
              transition: "all 1s ease",
            }}
          >
            <span
              style={{
                color: white,
                textShadow: `
                  0 0 12px rgba(255,255,255,0.2),
                  0 2px 6px rgba(0,0,0,0.6)
                `,
              }}
            >
              Why CoreX{" "}
            </span>
            <span
              style={{
                background: `linear-gradient(90deg, ${gold} 0%, ${goldLight} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 5px rgba(255,215,0,0.22))",
                textShadow: `
                  0 0 10px rgba(255,215,0,0.25),
                  0 0 12px rgba(255,200,0,0.18)
                `,
              }}
            >
              Stands Out
            </span>
          </h2>

          <p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: "0 0 12px rgba(0,0,0,0.7)",
            }}
          >
            Prasad’s proven system combines personal coaching, smart tracking, and
            community support to deliver results where traditional programs fail.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group flex items-start rounded-2xl border border-yellow-400/15 bg-gradient-to-br from-[#101010] to-[#080808] p-5 transition-all duration-300 hover:border-yellow-400/35 hover:shadow-[0_0_22px_rgba(197,161,0,0.08)] ${
                itemsVisible[index]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 mr-4 mt-1 text-yellow-400 transition duration-300 group-hover:drop-shadow-[0_0_6px_rgba(255,215,0,0.5)]">
                <CheckIcon />
              </div>
              <div>
                <h4
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: headingFont,
                    background: `linear-gradient(90deg, ${gold} 0%, ${goldLight} 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-gray-300 leading-relaxed"
                  style={{
                    textShadow: "0 0 8px rgba(0,0,0,0.5)",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center transition-all duration-1200 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div
            className="rounded-3xl p-10 md:p-14 border backdrop-blur-sm shadow-2xl"
            style={{
              borderColor: "rgba(197,161,0,0.4)",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,224,133,0.05))",
            }}
          >
            <h3
              className="font-bold mb-6"
              style={{
                fontFamily: headingFont,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                background: `linear-gradient(90deg, ${gold} 0%, ${goldLight} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 25px rgba(197,161,0,0.3))",
              }}
            >
              Ready to Experience the <span>CoreX Difference?</span>
            </h3>

            <p className="text-lg mb-10 opacity-90 max-w-2xl mx-auto">
              Join 77+ professionals who’ve transformed their bodies and lives with
              Prasad’s proven system.
            </p>

            <button
              onClick={handleStartTransformation}
              className="relative px-10 py-5 rounded-2xl font-bold uppercase tracking-wider shadow-lg flex items-center justify-center mx-auto overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${gold} 0%, ${goldLight} 100%)`,
                color: "#191800",
                fontFamily: headingFont,
                animation: "pulseGlow 2.5s infinite ease-in-out",
              }}
            >
              START YOUR TRANSFORMATION
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="#191800"
                strokeWidth={2.5}
                className="w-5 h-5 ml-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 5l5 5-5 5" />
              </svg>

              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-75%",
                  width: "50%",
                  height: "100%",
                  background:
                    "linear-gradient(120deg, rgba(255,255,255,0.25), rgba(255,255,255,0.7), rgba(255,255,255,0.25))",
                  transform: "skewX(-20deg)",
                  animation: "shineMove 6s infinite ease-in-out",
                }}
              />
            </button>

            <style>
              {`
                @keyframes pulseGlow {
                  0% { box-shadow: 0 0 15px rgba(197,161,0,0.4); }
                  50% { box-shadow: 0 0 16px rgba(197,161,0,0.35); }
                  100% { box-shadow: 0 0 15px rgba(197,161,0,0.4); }
                }
                @keyframes shineMove {
                  0% { left: -75%; }
                  60% { left: 125%; }
                  100% { left: 125%; }
                }
              `}
            </style>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;