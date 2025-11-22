import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import { motion, useInView } from "framer-motion";

// Import animations
import innovationAnim from "./assets/animations/1.json";
import timelineAnim from "./assets/animations/2.json";
import teamAnim from "./assets/animations/3.json";
import logo from "./assets/animations/LOGO.json";

// Icons
import { 
  Rocket, 
  Users, 
  Clock, 
  Target,
  ShieldCheck,
  Lightning,
  CheckCircle,
  ArrowRight,
  CaretDown,
  PaperPlaneRight,
  X
} from "phosphor-react";

// ------------------------------------------------------------------
// CONFIG
// ------------------------------------------------------------------
const FORM_URL = "https://formspree.io/f/your-form-id";

// ------------------------------------------------------------------
// MODAL COMPONENTS (Keep your existing modals)
// ------------------------------------------------------------------
const Modal = ({ isOpen, onClose, title, children, size = "max-w-4xl" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className={`bg-white rounded-2xl shadow-2xl w-full ${size} max-h-[90vh] overflow-hidden`}
      >
        <div className="flex items-center justify-between p-6 border-b border-amber-200">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-amber-50 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

const MissionModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="المهمة والرؤية - Mission & Vision" size="max-w-6xl">
    <div className="p-6 space-y-8">
      {/* Vision & Mission Section */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-green-800">رحلة المملكة 2030 وما بعدها</h3>
          <p className="text-gray-700 leading-relaxed">
            تمثل رؤية 2030 نقطة تحول في مسيرة المملكة العربية السعودية، حيث تتحول من اقتصاد قائم على النفط إلى اقتصاد متنوع قائم على الابتكار والمعرفة. 
            أصبح المهندسون السعوديون اليوم مهندسي القدرة الوطنية، وليسوا مجرد مشاركين في القوى العاملة.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <h4 className="font-semibold text-amber-800 mb-2">مصنع المشاريع السيادية</h4>
            <p className="text-sm text-gray-700">
              Sovereign Venture Factory - تحويل التحديات الوطنية إلى شركات تكنولوجية سيادية خلال 90 يومًا
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-green-800">The 2030 Journey and Beyond</h3>
          <p className="text-gray-700 leading-relaxed">
            Vision 2030 represents a turning point in Saudi Arabia's journey, transforming from an oil-based economy to a diversified, innovation-driven knowledge economy. 
            Saudi engineers are now architects of national capability, not just participants in the workforce.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <h4 className="font-semibold text-green-800 mb-2">Sovereign Venture Factory</h4>
            <p className="text-sm text-gray-700">
              Transforming national challenges into sovereign tech companies within 90-day cycles
            </p>
          </div>
        </div>
      </div>

      {/* NEW: Innovation Through Empowerment Section */}
      <div className="bg-gradient-to-r from-green-50 to-amber-50 border border-green-200 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation Through Empowerment</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Building the next generation of Saudi tech leaders by providing the tools, resources, and environment 
            where national talent can solve national challenges with global impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🚀</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-3">Talent Acceleration</h4>
            <p className="text-sm text-gray-600">
              Fast-tatching top engineering talent into sovereign technology leaders through immersive 90-day build cycles
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl border border-amber-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">💡</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-3">Problem-Driven Innovation</h4>
            <p className="text-sm text-gray-600">
              Starting with validated national challenges rather than solutions, ensuring market fit and real impact
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl border border-green-200 shadow-sm hover:shadow-md transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🌍</span>
            </div>
            <h4 className="font-bold text-gray-900 mb-3">Global Standards, Local Impact</h4>
            <p className="text-sm text-gray-600">
              Combining international best practices with deep local context to build solutions that scale globally
            </p>
          </div>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-white border border-amber-200 rounded-xl hover:border-green-300 transition-all">
          <div className="text-3xl font-bold text-amber-600 mb-2">🇸🇦</div>
          <h4 className="font-semibold text-gray-900 mb-2">القيادة الإقليمية</h4>
          <p className="text-sm text-gray-600">Regional Leadership in Deep Tech</p>
          <div className="mt-3 text-xs text-amber-600 font-semibold">
            Pioneering MENA's Tech Sovereignty
          </div>
        </div>
        <div className="text-center p-6 bg-white border border-amber-200 rounded-xl hover:border-green-300 transition-all">
          <div className="text-3xl font-bold text-amber-600 mb-2">💡</div>
          <h4 className="font-semibold text-gray-900 mb-2">الابتكار السيادي</h4>
          <p className="text-sm text-gray-600">Sovereign Innovation</p>
          <div className="mt-3 text-xs text-amber-600 font-semibold">
            Homegrown Solutions for Global Challenges
          </div>
        </div>
        <div className="text-center p-6 bg-white border border-amber-200 rounded-xl hover:border-green-300 transition-all">
          <div className="text-3xl font-bold text-amber-600 mb-2">🚀</div>
          <h4 className="font-semibold text-gray-900 mb-2">50 عاماً من التقدم</h4>
          <p className="text-sm text-gray-600">50-Year Technological Leap</p>
          <div className="mt-3 text-xs text-amber-600 font-semibold">
            Compressing Decades of Progress
          </div>
        </div>
      </div>
    </div>
  </Modal>
);


const StructureModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="الهيكل والجدول الزمني - Program Structure & Timeline">
    <div className="p-6 space-y-8">
      {/* Header Section */}
      <div className="text-center bg-gradient-to-r from-amber-50 to-white p-6 rounded-2xl border-2 border-amber-200">
        <h2 className="text-3xl font-bold text-green-800 mb-3">National Product Engine</h2>
        <p className="text-amber-500 text-xl font-semibold">90-Day Sovereign Build Cycle</p>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="bg-white p-3 rounded-xl border border-amber-200">
            <div className="text-lg font-bold text-green-800">100+</div>
            <div className="text-xs text-amber-500">Problem Dossiers</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-amber-200">
            <div className="text-lg font-bold text-green-800">90</div>
            <div className="text-xs text-amber-500">Days</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-amber-200">
            <div className="text-lg font-bold text-green-800">4</div>
            <div className="text-xs text-amber-500">Phases</div>
          </div>
          <div className="bg-white p-3 rounded-xl border border-amber-200">
            <div className="text-lg font-bold text-green-800">3</div>
            <div className="text-xs text-amber-500">Pilot Customers</div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Phase 1 */}
        <div className="space-y-4">
          <div className="text-center bg-white p-4 rounded-2xl border-2 border-amber-200">
            
            <h3 className="text-lg font-bold text-green-800">مرحلة الاستكشاف والتجميع</h3>
            <p className="text-amber-500 font-semibold text-sm">Phase 1: Selection & Assembly</p>
            <div className="bg-amber-50 text-amber-500 px-3 py-1 rounded-full text-xs font-bold mt-2">
              Day -30 to 0
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Curate 100+ Problem Dossiers</h4>
                  <p className="text-xs text-gray-600 mt-1">Comprehensive challenge briefs from government and industry sources</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Recruit Elite Engineers</h4>
                  <p className="text-xs text-gray-600 mt-1">Top 1% technical talent selection nationwide</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Team Formation</h4>
                  <p className="text-xs text-gray-600 mt-1">Passion-driven squads around validated challenges</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Zero-Day Plan Approval</h4>
                  <p className="text-xs text-gray-600 mt-1">Final validation and resource allocation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2 */}
        <div className="space-y-4">
          <div className="text-center bg-white p-4 rounded-2xl border-2 border-amber-200">
            
            <h3 className="text-lg font-bold text-green-800">مرحلة سباق الحلول</h3>
            <p className="text-amber-500 font-semibold text-sm">Phase 2: Solution Sprint</p>
            <div className="bg-amber-50 text-amber-500 px-3 py-1 rounded-full text-xs font-bold mt-2">
              Day 1-30
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Achieve 'First Win'</h4>
                  <p className="text-xs text-gray-600 mt-1">Initial breakthrough and validation milestone</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Technical Validation</h4>
                  <p className="text-xs text-gray-600 mt-1">Core technology proof and architecture</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Kill Switch Decisions</h4>
                  <p className="text-xs text-gray-600 mt-1">Strategic pivots or project termination calls</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">CTIL Module Identification</h4>
                  <p className="text-xs text-gray-600 mt-1">Spot reusable innovation components</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3 */}
        <div className="space-y-4">
          <div className="text-center bg-white p-4 rounded-2xl border-2 border-amber-200">
            
            <h3 className="text-lg font-bold text-green-800">مرحلة بناء النموذج</h3>
            <p className="text-amber-500 font-semibold text-sm">Phase 3: Proof-of-Concept Build</p>
            <div className="bg-amber-50 text-amber-500 px-3 py-1 rounded-full text-xs font-bold mt-2">
              Day 31-60
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Integrated Prototype</h4>
                  <p className="text-xs text-gray-600 mt-1">End-to-end working system demonstration</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Pilot Partner Integration</h4>
                  <p className="text-xs text-gray-600 mt-1">Real-world environment testing and feedback</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Scalability Sniff Test</h4>
                  <p className="text-xs text-gray-600 mt-1">Architecture review for growth potential</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Live Demo Validation</h4>
                  <p className="text-xs text-gray-600 mt-1">Stakeholder demonstration and feedback</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 4 */}
        <div className="space-y-4">
          <div className="text-center bg-white p-4 rounded-2xl border-2 border-amber-200">
            
            <h3 className="text-lg font-bold text-green-800">مرحلة التحضير للعرض</h3>
            <p className="text-amber-500 font-semibold text-sm">Phase 4: Demo-Ready Polish</p>
            <div className="bg-amber-50 text-amber-500 px-3 py-1 rounded-full text-xs font-bold mt-2">
              Day 61-90
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Secure 3 Pilot Customers</h4>
                  <p className="text-xs text-gray-600 mt-1">Committed early adopters for real-world testing</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Scale Plan Development</h4>
                  <p className="text-xs text-gray-600 mt-1">Growth roadmap and resource requirements</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Demo Day Preparation</h4>
                  <p className="text-xs text-gray-600 mt-1">Pitch refinement and presentation materials</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Venture Spin-out Ready</h4>
                  <p className="text-xs text-gray-600 mt-1">Legal structure and investment terms finalized</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Visualization */}
      <div className="bg-amber-50 rounded-2xl p-6 border-2 border-amber-200">
        <h3 className="text-xl font-bold text-green-800 text-center mb-6">90-Day Progress Journey</h3>
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-amber-200 transform -translate-y-1/2"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">🎯</span>
            </div>
            <div className="text-xs font-semibold text-green-800">Selection</div>
            <div className="text-xs text-amber-500">Day -30</div>
          </div>

          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">⚡</span>
            </div>
            <div className="text-xs font-semibold text-green-800">Sprint</div>
            <div className="text-xs text-amber-500">Day 30</div>
          </div>

          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">🔧</span>
            </div>
            <div className="text-xs font-semibold text-green-800">Build</div>
            <div className="text-xs text-amber-500">Day 60</div>
          </div>

          <div className="relative z-10 text-center">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white font-bold">🚀</span>
            </div>
            <div className="text-xs font-semibold text-green-800">Launch</div>
            <div className="text-xs text-amber-500">Day 90</div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
);

const StackModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Innovation Stack - Complete 10-Layer Architecture" size="max-w-6xl">
    <div className="p-6 space-y-6">
      {/* Your existing stack modal content */}
    </div>
  </Modal>
);

const BinaryBackground = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentPhrases, setCurrentPhrases] = useState([]);

  const arabicPhrases = [
    "لا يهم كم أنت بطيئ طالما أنك لن تتوقف.",
    "لا يوجد طريق مختصر إلى مكان يستحق الذهاب إليه.", 
    "كن التغير الذي تريد أن تراه في العالم.",
    "دائما خذ في عين الإعتبار أن قرار النجاح هو أهم من أي شيئ آخر.",
    "أن تخفق 100% في الطلقات التي لا تطلقها.",
    "الخطر الأعظم على معظمنا هو ليس أن يكون هدفنا عال جداً, و أن نخفق في تحقيقه, بل أن يكون سهلاً جداً و نحققه.",
    "أفضل توقيت لزرع شجرة كان قبل سنة و أفضل ثاني توقيت هو الآن.",
    "لن تكون قادراً على قطع المحيط إذا لم يكن لديك الشجاعة أن تخسر مرآى الشاطئ.",
    "مهما تصور أو صدق عقل الإنسان, فإنه قادر على تحقيقه.",
    "السعادة ليست شيئاً يحصل بسهولة, فإنها تأتي من أفعالك."
  ];

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let currentIndex = 0;
    const maxPhrases = isMobile ? 2 : 3;
    
    const updatePhrases = () => {
      const newPhrases = [];
      
      for (let i = 0; i < maxPhrases; i++) {
        const phraseIndex = (currentIndex + i) % arabicPhrases.length;
        newPhrases.push({
          text: arabicPhrases[phraseIndex],
          id: `${phraseIndex}-${Date.now()}-${i}`,
          delay: i * 1000
        });
      }
      
      setCurrentPhrases(newPhrases);
      currentIndex = (currentIndex + maxPhrases) % arabicPhrases.length;
    };

    updatePhrases();
    const interval = setInterval(updatePhrases, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const getRandomPosition = (index, total) => {
    const sectionHeight = 80 / total;
    const top = (sectionHeight * index) + 10 + (Math.random() * sectionHeight * 0.6);
    const left = Math.random() * 70 + 15;
    return { top: `${top}%`, left: `${left}%` };
  };

  const getRandomFontSize = () => {
    const sizes = ['text-lg', 'text-xl', 'text-2xl'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <div className="w-full min-h-screen scroll-smooth bg-amber-50">
      <div className="fixed w-full h-full top-0 -z-0 overflow-hidden bg-amber-50/95" aria-hidden>
        {currentPhrases.map((phrase, index) => (
          <motion.div
            key={phrase.id}
            className={`absolute font-arabic font-medium text-green-800/80 ${getRandomFontSize()} text-center leading-relaxed max-w-xs`}
            style={getRandomPosition(index, currentPhrases.length)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.9, 0.9, 0], scale: [0.8, 1, 1, 0.8] }}
            transition={{ 
              duration: 4,
              times: [0, 0.1, 0.8, 1],
              ease: "easeInOut",
              delay: phrase.delay / 1000
            }}
          >
            {phrase.text}
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

const TeamModal = ({ isOpen, onClose }) => {
  const teamMembers = [
    {
      role: "NPE President - Chairman",
      headcount: 1,
      reportsTo: "Partners - Agencies",
      person: "Dr Alrohaimi",
      tasks: [
        "Strategic vision alignment with national transformation goals",
        "Stakeholder management with government partners and agencies",
        "Oversight of sovereign mission direction and priorities",
        "Ensuring compliance with Vision 2030 objectives",
        "Representing NPE at national and international forums"
      ]
    },
    {
      role: "NPE Director", 
      headcount: 1,
      reportsTo: "Governing Board",
      person: "Sebastien Fenelon",
      tasks: [
        "Executive leadership of the 90-day build cycle",
        "Final decision authority on project continuation or termination",
        "Strategic oversight of product focus and market fit",
        "Leading technology vision and implementation roadmap",
        "Ensuring target outcomes are achieved within timeline"
      ]
    },
    {
      role: "Assistant Director",
      headcount: 1, 
      reportsTo: "NPE Director",
      person: "Tech - intl/Saudi Member",
      tasks: [
        "Supporting Director in operational execution and daily follow-up",
        "Managing team culture and fostering innovation environment",
        "Strategic coordination between different functional teams",
        "Translating Director's vision into actionable plans",
        "Managing internal communications and knowledge sharing"
      ]
    },
    {
      role: "Cohort Manager",
      headcount: 1,
      reportsTo: "NPE Director", 
      person: "Saudi Member",
      tasks: [
        "Comprehensive management of cohort daily operations",
        "Mentoring build teams and supporting their professional wellbeing",
        "Managing precise timelines and integrated logistics",
        "Bridging local context with global technical requirements",
        "Ensuring exceptional experience for all team members"
      ]
    },
    {
      role: "Technical Program Manager",
      headcount: 1,
      reportsTo: "NPE Director",
      person: "Tech Specialist - intl", 
      tasks: [
        "End-to-end management of central technology platform",
        "Oversight of cloud computing resources and infrastructure",
        "Ensuring technical infrastructure availability and sustainability",
        "Managing shared technical resources and allocation efficiency",
        "Monitoring technical performance and improvement initiatives"
      ]
    },
    {
      role: "CTIL Lead",
      headcount: 1,
      reportsTo: "NPE Director",
      person: "Tech Specialist - intl",
      tasks: [
        "Architecting and developing cross-team innovation layer",
        "Identifying and packaging reusable technical breakthroughs",
        "Overseeing modular systems architecture and integration",
        "Ensuring compound innovation spread and knowledge transfer",
        "Building sustainable and scalable innovation systems"
      ]
    },
    {
      role: "AI/Agent Engineer",
      headcount: 1, 
      reportsTo: "CTIL Lead",
      person: "Tech Specialist - intl",
      tasks: [
        "Building and maintaining AI systems and intelligent agents",
        "Developing advanced automated scanning and documentation tools",
        "Managing intelligent integration platform and cognitive systems",
        "Ensuring AI system efficiency and performance optimization",
        "Innovating AI solutions for national challenge domains"
      ]
    },
    {
      role: "Technical Expert Pool",
      headcount: "10-15 (Part-time)",
      reportsTo: "TPM (for coordination)",
      person: "Tech Specialist - intl", 
      tasks: [
        "Providing specialized technical guidance and weekly consultations",
        "In-depth technical review and team performance assessment",
        "Transferring advanced global expertise and best practices",
        "Supporting complex problem-solving and technical challenges",
        "Contributing to development of local technical capabilities"
      ]
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="فريق القيادة - Leadership Team" size="max-w-6xl">
      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Arabic Side - Focused on Values and Representation */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">قيم الفريق ورسالته</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              فريق قيادي يجسد التكامل بين الأصالة المحلية والحداثة العالمية، حيث يمثل هذا الفريق نموذجاً 
              للتعاون الدولي الذي يضع القدرات الوطنية في صدارة الابتكار التكنولوجي.
            </p>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-amber-100">
                <h4 className="font-semibold text-amber-700 mb-2">التمثيل الوطني</h4>
                <p className="text-sm text-gray-600">
                  قيادات سعودية تضمن التوافق مع رؤية 2030 والفهم العميق للسياق المحلي
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-100">
                <h4 className="font-semibold text-amber-700 mb-2">الخبرة العالمية</h4>
                <p className="text-sm text-gray-600">
                  كفاءات دولية تقدم أحدث الممارسات التقنية والخبرات المثبتة في بناء الأنظمة المعقدة
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-100">
                <h4 className="font-semibold text-amber-700 mb-2">نقل المعرفة</h4>
                <p className="text-sm text-gray-600">
                  برنامج ممنهج لبناء القدرات المحلية وضمان استدامة الابتكار الوطني
                </p>
              </div>
            </div>
          </div>

          {/* English Side - Focused on Structure and Operations */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Leadership Structure</h3>
            <p className="text-gray-700 mb-4">
              World-class leadership team combining local expertise with global capabilities to ensure sovereign mission success.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-100">
                <div>
                  <span className="font-semibold text-gray-900">Core Leadership Team</span>
                  <p className="text-xs text-gray-500">Full-time dedicated leadership</p>
                </div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">8 members</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-100">
                <div>
                  <span className="font-semibold text-gray-900">Technical Experts Pool</span>
                  <p className="text-xs text-gray-500">Part-time specialized guidance</p>
                </div>
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">10-15 experts</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-green-100">
                <div>
                  <span className="font-semibold text-gray-900">Operational Model</span>
                  <p className="text-xs text-gray-500">90-day sprint cycles</p>
                </div>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">Agile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Roles & Responsibilities</h3>
          {teamMembers.map((member, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-amber-300 hover:shadow-lg transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">{member.role}</h4>
                  <p className="text-sm text-gray-600 mt-1">{member.person}</p>
                </div>
                <div className="text-right">
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded text-sm font-semibold inline-block">
                    {member.headcount}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Reports to: {member.reportsTo}</div>
                </div>
              </div>
              <ul className="space-y-2">
                {member.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="flex-1">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

// ------------------------------------------------------------------
// SECTION COMPONENTS
// ------------------------------------------------------------------

// Home Section with Portfolio Preview
const HomeSection = ({ onNavigate }) => {
  const portfolioStartups = [
    {
      name: "Quantum Materials Co",
      sector: "Advanced Materials",
      stage: "Series A",
      description: "Developing next-generation quantum materials for computing"
    },
    {
      name: "Sovereign AI Labs",
      sector: "Artificial Intelligence", 
      stage: "Seed",
      description: "Building privacy-first AI solutions for government applications"
    },
    {
      name: "BioTech Innovations",
      sector: "Biotechnology",
      stage: "Series B",
      description: "Revolutionizing healthcare with personalized medicine"
    }
  ];

  return (
    <section id="home" className="min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center px-4 sm:px-6 pt-16 sm:pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <h1 className="text-3xl sm:text-2xl lg:text-5xl font-bold text-gray-900 leading-tight pt-2">
              Kingdom Technological Sovereignty Program (KTSP)           
              <span className="text-amber-500 block py-4">محرك المملكة نحو المستقبل السيادي</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-4 sm:mt-6 leading-relaxed">
              Empowering 100 elite engineers to build Saudi Arabia's 50-year technological advantage. 
              A systematic approach to transform national challenges into sovereign deep-tech ventures.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button 
                onClick={() => onNavigate('apply')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                Join the First 100 <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate('portfolio')}
                className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                View Our Portfolio
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://res.cloudinary.com/dyeomcmin/image/upload/v1762615142/02829ab0-769c-4b05-bf1c-39da394d7ec0_ven3f2.jpg" 
              alt="Kingdom Technological Sovereignty Program Vision"
              className="w-full max-w-2xl rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Portfolio Preview Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Portfolio Companies</h2>
            <p className="text-lg text-gray-600 mt-4">
              Success stories from our sovereign technology ventures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {portfolioStartups.map((startup, index) => (
              <div key={index} className="bg-amber-50 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{startup.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                    {startup.sector}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    {startup.stage}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{startup.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => onNavigate('portfolio')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Full Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Be Part of the Future Section */}
      <div className="py-20 bg-gradient-to-r from-amber-50 to-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Be Part of Saudi Arabia's Technological Future
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the movement to build sovereign capabilities and shape the next 50 years of innovation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => onNavigate('apply')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Apply Now
            </button>
            <button 
              onClick={() => onNavigate('status')}
              className="border border-green-500 text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Check Application Status
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Application Form Section with BOOST integrated
const ApplicationFormSection = ({ onNavigate, onApplicationSubmit }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    nationality: '',
    currentRole: '',
    yearsExperience: '',
    technicalSkills: '',
    education: '',
    projectTitle: '',
    problemStatement: '',
    proposedSolution: '',
    targetMarket: '',
    teamSize: '',
    cofounders: '',
    deck: null,
    motivation: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const steps = [
    {
      title: "Personal Information",
      fields: ['fullName', 'email', 'phone', 'nationality']
    },
    {
      title: "Professional Background", 
      fields: ['currentRole', 'yearsExperience', 'technicalSkills', 'education']
    },
    {
      title: "Project Proposal",
      fields: ['projectTitle', 'problemStatement', 'proposedSolution', 'targetMarket']
    },
    {
      title: "Team & Documentation",
      fields: ['teamSize', 'cofounders', 'deck', 'motivation']
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowSuccess(true);
    onApplicationSubmit();
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-amber-50">
        <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your application. We'll review it and get back to you soon.
          </p>
          <button 
            onClick={() => {
              setShowSuccess(false);
              onNavigate('home');
            }}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="apply" className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Apply to KTSP</h2>
          <p className="text-lg text-gray-600 mt-4">
            Join the next cohort of Saudi Arabia's technological pioneers
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-amber-200 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStep ? 'bg-amber-500 text-white' : 'bg-gray-300 text-gray-600'
                  }`}>
                    {index < currentStep ? <CheckCircle size={20} /> : index + 1}
                  </div>
                  <span className="text-xs mt-2 text-center text-gray-600">{step.title}</span>
                </div>
              ))}
            </div>

            {/* Form Fields */}
            <div className="grid gap-6">
              {steps[currentStep].fields.map(field => (
                <div key={field}>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    {field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                  </label>
                  {field === 'problemStatement' || field === 'proposedSolution' || field === 'motivation' ? (
                    <textarea
                      value={formData[field]}
                      onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  ) : field === 'deck' ? (
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={(e) => setFormData(prev => ({ ...prev, deck: e.target.files[0] }))}
                        className="hidden"
                        id="deck-upload"
                      />
                      <label htmlFor="deck-upload" className="cursor-pointer">
                        {formData.deck ? (
                          <div className="text-green-600">
                            <CheckCircle size={32} className="mx-auto mb-2" />
                            <p>Deck uploaded: {formData.deck.name}</p>
                          </div>
                        ) : (
                          <div className="text-gray-500">
                            <PaperPlaneRight size={32} className="mx-auto mb-2" />
                            <p>Click to upload your pitch deck (PDF)</p>
                            <p className="text-sm">Max file size: 10MB</p>
                          </div>
                        )}
                      </label>
                    </div>
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      value={formData[field]}
                      onChange={(e) => setFormData(prev => ({ ...prev, [field]: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => setCurrentStep(prev => prev - 1)}
                disabled={currentStep === 0}
                className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 disabled:opacity-50"
              >
                Previous
              </button>
              
              {currentStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  className="px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>

        {/* BOOST Section integrated below the form */}
        <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-2xl p-8 border-2 border-amber-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">BOOST Your Application</h3>
            <p className="text-gray-600">
              Access resources to strengthen your proposal
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-amber-200">
              <h4 className="font-bold text-gray-900 mb-3">Application Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Application Guide & Tips</li>
                <li>• Pitch Deck Template</li>
                <li>• Technical Requirements</li>
                <li>• Evaluation Criteria</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-amber-200">
              <h4 className="font-bold text-gray-900 mb-3">Support Available</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Office Hours with Experts</li>
                <li>• Technical Consultation</li>
                <li>• Proposal Review Sessions</li>
                <li>• Q&A Sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Status Check Section
const StatusSection = ({ onNavigate }) => {
  const [searchInput, setSearchInput] = useState('');
  const [statusData, setStatusData] = useState(null);

  const handleStatusCheck = (e) => {
    e.preventDefault();
    // Simulate status check
    setStatusData({
      status: 'under-review',
      applicationId: 'KTSP-2024-001',
      submittedDate: '2024-01-15',
      currentStage: 'Technical Review',
      nextUpdate: '2024-01-27'
    });
  };

  return (
    <section id="status" className="min-h-screen flex items-center justify-center bg-amber-50 py-20">
      <div className="max-w-2xl mx-auto px-6 w-full">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Application Status</h2>
            <p className="text-gray-600">
              Enter your application details to check your status
            </p>
          </div>

          {!statusData ? (
            <form onSubmit={handleStatusCheck} className="space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email or Company Name
                </label>
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your email or company name"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Check Status
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Application Found</h3>
                  <p className="text-gray-600">Status: <span className="font-semibold">Under Review</span></p>
                </div>
              </div>
              
              <div className="grid gap-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Application ID:</span>
                  <span className="font-semibold">{statusData.applicationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Submitted Date:</span>
                  <span className="font-semibold">{statusData.submittedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Stage:</span>
                  <span className="font-semibold">{statusData.currentStage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Update:</span>
                  <span className="font-semibold">{statusData.nextUpdate}</span>
                </div>
              </div>

              <button
                onClick={() => {
                  setStatusData(null);
                  setSearchInput('');
                }}
                className="w-full border border-amber-500 text-amber-600 hover:bg-amber-50 py-3 rounded-lg font-semibold transition-colors"
              >
                Check Another Application
              </button>
            </div>
          )}

          <div className="mt-6 text-center">
            <button 
              onClick={() => onNavigate('home')}
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const PortfolioSection = ({ onNavigate }) => {
  const portfolioCompanies = [
    {
      name: "Quantum Materials Co",
      logo: "🔬",
      sector: "Advanced Materials",
      stage: "Series A",
      description: "Developing next-generation quantum materials for computing and energy applications",
      impact: "Raised $15M, 25+ jobs created",
      founded: "2023"
    },
    {
      name: "Sovereign AI Labs",
      logo: "🤖",
      sector: "Artificial Intelligence",
      stage: "Seed", 
      description: "Building privacy-first AI solutions for government and enterprise applications",
      impact: "3 government contracts secured",
      founded: "2024"
    },
    {
      name: "BioTech Innovations",
      logo: "🧬",
      sector: "Biotechnology",
      stage: "Series B",
      description: "Revolutionizing healthcare with personalized medicine and advanced diagnostics",
      impact: "50+ patents filed, 100+ jobs",
      founded: "2022"
    },
    {
      name: "Clean Energy Solutions",
      logo: "⚡",
      sector: "Energy Tech",
      stage: "Series A",
      description: "Developing sustainable energy solutions for Saudi Arabia's green transition",
      impact: "10MW capacity deployed",
      founded: "2023"
    },
    {
      name: "AgriTech Pioneers",
      logo: "🌱",
      sector: "Agriculture Technology",
      stage: "Seed",
      description: "Smart farming solutions to optimize water usage and increase crop yields",
      impact: "30% water savings achieved",
      founded: "2024"
    },
    {
      name: "FinTech Saudi",
      logo: "💳",
      sector: "Financial Technology",
      stage: "Series B",
      description: "Building the next generation of financial infrastructure for the Kingdom",
      impact: "1M+ users, $50M processed",
      founded: "2022"
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Portfolio</h2>
          <p className="text-lg text-gray-600 mt-4">
            Investing in Saudi Arabia's most promising technology ventures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioCompanies.map((company, index) => (
            <div key={index} className="bg-amber-50 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">{company.logo}</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-medium">
                      {company.sector}
                    </span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      {company.stage}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{company.description}</p>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Impact:</span>
                  <span className="font-medium text-gray-700">{company.impact}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Founded:</span>
                  <span className="font-medium text-gray-700">{company.founded}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('home')}
            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
};

// Team Section (Your existing TeamSection component)
const TeamSection = ({ onNavigate }) => {
  // Your existing TeamSection implementation
  return (
    <section id="team" className="min-h-screen py-20 bg-gradient-to-b from-white to-amber-50/30">
      {/* Your existing team content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <button 
            onClick={() => onNavigate('home')}
            className="text-amber-600 hover:text-amber-700 font-medium mb-4 inline-flex items-center gap-2"
          >
            ← Back to Home
          </button>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Team</h2>
          <p className="text-lg text-gray-600 mt-2">
            Meet the leadership driving Saudi Arabia's technological sovereignty
          </p>
        </div>
        {/* Rest of your team content */}
      </div>
    </section>
  );
};

// ------------------------------------------------------------------
// MAIN COMPONENT
// ------------------------------------------------------------------

export default function Home() {
  const [activeModal, setActiveModal] = useState(null);
  const [currentSection, setCurrentSection] = useState('home');
  const [hashtag, setHashtag] = useState('#HOME');

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const navigateToSection = (section) => {
    setCurrentSection(section);
    setHashtag(`#${section.toUpperCase()}`);
    window.scrollTo(0, 0);
  };

  const handleApplicationSubmit = () => {
    // Show success and then navigate home after delay
    setTimeout(() => {
      navigateToSection('home');
    }, 3000);
  };

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection onNavigate={navigateToSection} />;
      case 'apply':
        return <ApplicationFormSection onNavigate={navigateToSection} onApplicationSubmit={handleApplicationSubmit} />;
      case 'status':
        return <StatusSection onNavigate={navigateToSection} />;
      case 'team':
        return <TeamSection onNavigate={navigateToSection} />;
      case 'portfolio':
        return <PortfolioSection onNavigate={navigateToSection} />;
      default:
        return <HomeSection onNavigate={navigateToSection} />;
    }
  };

  return (
    <BinaryBackground>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-amber-200/20 backdrop-blur-md z-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-3">
                <img src="https://res.cloudinary.com/dyeomcmin/image/upload/v1762551926/ChatGPT_Image_Nov_7_2025_04_44_18_PM_gy9css.png" className="w-10 h-10 sm:w-12 sm:h-12" />
                <div className="text-xl sm:text-2xl font-bold text-green-800">WAII</div>
                <div className="hidden sm:block text-sm text-amber-600 font-medium">
                  {hashtag}
                </div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <button 
                  onClick={() => navigateToSection('home')}
                  className={`transition-colors ${currentSection === 'home' ? 'text-green-800 font-semibold' : 'text-gray-700 hover:text-green-800'}`}
                >
                  Home
                </button>
                <button 
                  onClick={() => navigateToSection('team')}
                  className={`transition-colors ${currentSection === 'team' ? 'text-green-800 font-semibold' : 'text-gray-700 hover:text-green-800'}`}
                >
                  Team
                </button>
                <button 
                  onClick={() => navigateToSection('portfolio')}
                  className={`transition-colors ${currentSection === 'portfolio' ? 'text-green-800 font-semibold' : 'text-gray-700 hover:text-green-800'}`}
                >
                  Portfolio
                </button>
                <button onClick={() => openModal('mission')} className="text-gray-700 hover:text-green-800 transition-colors">
                  Mission
                </button>
                <button onClick={() => openModal('structure')} className="text-gray-700 hover:text-green-800 transition-colors">
                  Structure
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigateToSection('status')}
                className="hidden sm:block border border-amber-500 text-amber-600 hover:bg-amber-50 px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
              >
                Check Status
              </button>
              <button 
                onClick={() => navigateToSection('apply')}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <MissionModal isOpen={activeModal === 'mission'} onClose={closeModal} />
      <StructureModal isOpen={activeModal === 'structure'} onClose={closeModal} />
      <StackModal isOpen={activeModal === 'stack'} onClose={closeModal} />

      <main className="pt-16">
        {renderCurrentSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-3">
                <img src="https://res.cloudinary.com/dyeomcmin/image/upload/v1762551926/ChatGPT_Image_Nov_7_2025_04_44_18_PM_gy9css.png" className="w-10 h-10 sm:w-12 sm:h-12" />
                <div className="text-xl sm:text-2xl font-bold text-green-800">WAII</div>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                Building Saudi Arabia's sovereign technological future, one venture at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Program</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <button onClick={() => openModal('mission')} className="block hover:text-white transition-colors text-left">Mission</button>
                <button onClick={() => openModal('structure')} className="block hover:text-white transition-colors text-left">Structure</button>
                <button onClick={() => openModal('stack')} className="block hover:text-white transition-colors text-left">Stack</button>
                <button onClick={() => navigateToSection('team')} className="block hover:text-white transition-colors text-left">Team</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <button onClick={() => navigateToSection('apply')} className="block hover:text-white transition-colors text-left">Apply</button>
                <button onClick={() => navigateToSection('status')} className="block hover:text-white transition-colors text-left">Status Check</button>
                <button onClick={() => navigateToSection('portfolio')} className="block hover:text-white transition-colors text-left">Portfolio</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>info@ktsp.gov.sa</div>
                <div>+966 12 345 6789</div>
                <div>Riyadh, Saudi Arabia</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Kingdom Technological Sovereignty Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </BinaryBackground>
  );
}