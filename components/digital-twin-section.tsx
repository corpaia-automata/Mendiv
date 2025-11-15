"use client";

import { Button } from "@/components/ui/button";
import { BarChart3, Heart, Activity, TrendingUp } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      delay,
    },
  }),
};

export default function DigitalTwinSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only once when scrolled into view
    threshold: 0.15, // Triggers earlier in viewport
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-brosta text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Your Digital Twin
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A virtual replica of your biology, behaviors, and environment
            powered by continuous data from wearables, genetics, sleep,
            metabolism, and more. It allows us to simulate, predict, and
            optimize your health in real time before issues arise.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Mockup */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            custom={0.2}
          >
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 p-6 transform transition-all duration-300 hover:shadow-3xl">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-brosta text-xl font-bold text-black">
                  Health Dashboard
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#007a35] rounded-full animate-pulse"></div>
                  <span className="font-lato text-sm text-gray-600">
                    Live Sync
                  </span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <Heart className="w-5 h-5 text-[#007a35]" />
                    <span className="font-lato text-xs text-gray-500">
                      24h avg
                    </span>
                  </div>
                  <div className="font-brosta text-2xl font-bold text-black">
                    72
                  </div>
                  <div className="font-lato text-xs text-gray-600">
                    Heart Rate
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="w-5 h-5 text-blue-500" />
                    <span className="font-lato text-xs text-gray-500">
                      Today
                    </span>
                  </div>
                  <div className="font-brosta text-2xl font-bold text-black">
                    8.2h
                  </div>
                  <div className="font-lato text-xs text-gray-600">Sleep</div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                    <span className="font-lato text-xs text-gray-500">
                      This week
                    </span>
                  </div>
                  <div className="font-brosta text-2xl font-bold text-black">
                    94%
                  </div>
                  <div className="font-lato text-xs text-gray-600">
                    Recovery
                  </div>
                </div>

                <div className="bg-orange-50 rounded-lg p-4 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-5 h-5 text-orange-500" />
                    <span className="font-lato text-xs text-gray-500">
                      Trend
                    </span>
                  </div>
                  <div className="font-brosta text-2xl font-bold text-black">
                    +12%
                  </div>
                  <div className="font-lato text-xs text-gray-600">
                    Vitality
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-lato text-sm text-gray-600">
                    Health Score
                  </span>
                  <span className="font-lato text-sm font-semibold text-[#007a35]">
                    87/100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#007a35] to-[#005c26] h-3 rounded-full"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <h4 className="font-brosta text-sm font-bold text-black mb-2">
                  Today's Recommendations
                </h4>
                <ul className="space-y-1">
                  <li className="font-lato text-xs text-gray-600">
                    • Increase magnesium intake by 15%
                  </li>
                  <li className="font-lato text-xs text-gray-600">
                    • Optimize sleep window: 10:30 PM
                  </li>
                  <li className="font-lato text-xs text-gray-600">
                    • Add 10 min morning sunlight
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            custom={0.4}
            className="space-y-8"
          >
            <h3 className="font-brosta text-2xl lg:text-3xl font-bold text-black">
              Real-Time Health Intelligence
            </h3>
            <p className="font-lato text-lg text-gray-600 leading-relaxed">
              Your Digital Twin continuously monitors and analyzes your health
              data, providing personalized insights and predictions to optimize
              your wellbeing before issues arise.
            </p>

            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                custom={0.5}
                className="flex items-start"
              >
                <div className="w-2 h-2 bg-[#007a35] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-brosta text-lg font-bold text-black mb-2">
                    Predictive Analytics
                  </h4>
                  <p className="font-lato text-gray-600">
                    Forecast health trends and potential issues weeks in advance
                    using AI modeling.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                custom={0.6}
                className="flex items-start"
              >
                <div className="w-2 h-2 bg-[#007a35] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-brosta text-lg font-bold text-black mb-2">
                    Personalized Recommendations
                  </h4>
                  <p className="font-lato text-gray-600">
                    Daily, science-backed suggestions tailored to your unique
                    biology, habits, and goals.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                custom={0.7}
                className="flex items-start"
              >
                <div className="w-2 h-2 bg-[#007a35] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-brosta text-lg font-bold text-black mb-2">
                    Continuous Optimization
                  </h4>
                  <p className="font-lato text-gray-600">
                    Adaptive algorithms learn from your data to improve accuracy
                    and relevance over time.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} custom={0.8}>
              <Button
                asChild
                className="rounded-full bg-[#007a35] hover:bg-[#005c26] text-white px-8 py-3 font-lato font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-[#007a35]/25"
              >
                <a href="/programmes/digitalTwin">Explore Digital Twin</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
