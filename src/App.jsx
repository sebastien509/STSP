// File: src/pages/KTSPProposal.jsx
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
// MODAL COMPONENTS
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
const StackModal = ({ isOpen, onClose }) => {
  const [expandedLayer, setExpandedLayer] = useState(null);

  const stackLayers = [
    {
      id: 1,
      title: "Foundational Physics & Materials",
      description: "Mastering the fundamental properties of matter and energy",
      items: [
        "Programmable Matter & Metamaterials",
        "2D & Quantum Materials (e.g., Graphene)",
        "High-Entropy Alloys & Advanced Composites", 
        "Self-Healing & Adaptive Materials",
        "Covalent Organic Frameworks (COFs)",
        "Liquid & Transient Electronics",
        "Superconductors at Ambient Conditions",
        "Molecular Assembly & Nanofabrication",
        "Bio-Integrated Materials",
        "Spintronic & Magnonic Materials",
        "Plasmonic & Nano-Optic Materials",
        "Advanced Ceramics & Refractories"
      ],
      hardware: [
        "Molecular Beam Epitaxy systems",
        "Cryogenic electron microscopes",
        "Atomic force microscopes",
        "Plasma-enhanced CVD systems",
        "High-temperature furnaces (up to 3000°C)",
        "Clean room facilities (Class 100-1000)",
        "X-ray diffractometers",
        "Scanning electron microscopes"
      ],
      expertise: [
        "PhD in Materials Science, Physics, or Chemical Engineering",
        "5+ years nanomaterials synthesis",
        "Quantum mechanics and solid-state physics",
        "Surface chemistry and catalysis",
        "Computational materials design",
        "Thin-film deposition techniques"
      ],
      software: [
        "VASP, Quantum ESPRESSO (DFT calculations)",
        "LAMMPS, GROMACS (molecular dynamics)",
        "COMSOL Multiphysics",
        "Materials Project API",
        "Custom ML for materials discovery",
        "MATLAB, Python with SciPy/NumPy"
      ]
    },
    {
      id: 2,
      title: "Core Computing & Hardware", 
      description: "Architecting the physical engines of computation",
      items: [
        "Post-Moore's Law Architectures (Chiplets, 3D-IC)",
        "Neuromorphic Computing chips",
        "Quantum Computing Hardware (superconducting, photonic)",
        "Analog & Mixed-Signal AI processors",
        "Optical Computing systems",
        "Memristive & In-Memory Computing",
        "Cryogenic & Reversible Computing",
        "Hardware for Causal AI",
        "TinyML & Ultra-Low-Power SoCs",
        "FPGAs & ASICs for Niche AI",
        "Bio-Hybrid & Molecular Computers"
      ],
      hardware: [
        "7nm/5nm semiconductor fabrication tools",
        "Quantum processor dilution refrigerators (<10mK)",
        "Photonic integrated circuit testbeds",
        "High-speed oscilloscopes (100+ GHz)",
        "Vector network analyzers",
        "Thermal chambers (-80°C to +300°C)",
        "Probe stations for wafer testing",
        "EMI/EMC testing chambers"
      ],
      expertise: [
        "PhD in Electrical Engineering, Computer Architecture",
        "VLSI design and verification",
        "Quantum circuit design",
        "Photonic integrated circuits",
        "Low-power circuit design",
        "Thermal management systems",
        "Signal integrity analysis"
      ],
      software: [
        "Cadence, Synopsys, Mentor EDA tools",
        "Qiskit, Cirq (quantum computing)",
        "TensorFlow Lite Micro",
        "Custom compiler toolchains",
        "SPICE circuit simulation",
        "ANSYS HFSS, CST Studio"
      ]
    },
    {
      id: 3,
      title: "Advanced Algorithms & AI Primitives",
      description: "Developing the core logic and intelligence",
      items: [
        "Causal AI & Inference Engines",
        "Generative Foundation Models",
        "Embodied AI & Reinforcement Learning",
        "Federated & Swarm Learning",
        "Self-Improving AI Systems (AutoML++)",
        "Geometric & Topological Deep Learning",
        "Symbolic AI & Neuro-Symbolic Integration",
        "Differentiable Programming",
        "Multi-Modal Fusion Architectures", 
        "AI for Automated Science",
        "Agentic AI Frameworks"
      ],
      hardware: [
        "NVIDIA DGX A100/H100 systems",
        "High-memory servers (2TB+ RAM)",
        "RDMA-capable networking (InfiniBand)",
        "Large-scale GPU clusters (100+ GPUs)",
        "Specialized TPU/NPU accelerators",
        "High-performance storage (NVMe arrays)"
      ],
      expertise: [
        "PhD in Computer Science, Mathematics, or Statistics",
        "Advanced probability and Bayesian inference",
        "Reinforcement learning theory",
        "Graph neural networks",
        "Differential geometry for ML",
        "Distributed systems optimization"
      ],
      software: [
        "PyTorch, TensorFlow, JAX",
        "Ray, Dask for distributed computing",
        "Weights & Biases, MLflow",
        "Custom CUDA kernels",
        "DoWhy, CausalML libraries",
        "SymPy, Wolfram Engine"
      ]
    },
    {
      id: 4,
      title: "Sensing, Actuation & Control",
      description: "Bridging the digital and physical worlds",
      items: [
        "Quantum Sensing (magnetic fields, gravity)",
        "Hyperspectral & Terahertz Imaging",
        "Advanced LIDAR & Solid-State Radar",
        "Distributed Sensor Networks",
        "Tactile & Haptic Skins", 
        "Bio-Sensors & Continuous Molecular Monitoring",
        "Neuromorphic Sensors",
        "Precision Actuators & Robotics Drives",
        "Magnetic Levitation & Control",
        "Field-Induced Polymerization & Control",
        "Non-Line-of-Sight (NLOS) Imaging"
      ],
      hardware: [
        "Atomic magnetometers (fT sensitivity)",
        "THz time-domain spectrometers",
        "256-beam MEMS LIDAR systems",
        "Distributed acoustic sensing units",
        "High-torque density actuators",
        "6-axis force-torque sensors",
        "Ultra-high vacuum chambers",
        "Precision motion stages (nm accuracy)"
      ],
      expertise: [
        "PhD in Physics, Electrical Engineering, or Mechanical Engineering",
        "Signal processing and filter design",
        "Control theory (optimal, adaptive)",
        "MEMS/NEMS fabrication",
        "Electromagnetic field theory",
        "Biomedical instrumentation"
      ],
      software: [
        "MATLAB Simulink",
        "ROS 2 (Robot Operating System)",
        "OpenCV, PCL (point cloud library)",
        "GNU Radio for SDR",
        "Custom DSP pipelines",
        "ANSYS Maxwell, COMSOL"
      ]
    },
    {
      id: 5,
      title: "Biotechnology & Engineering Biology",
      description: "Programming and interfacing with life",
      items: [
        "Gene Writing & Base Editing",
        "Synthetic Biology & Metabolic Engineering",
        "Cell & Gene Therapies",
        "Regenerative Medicine & Tissue Engineering",
        "Microbiome Engineering",
        "DNA Data Storage & Biological Computing",
        "De-Extinction & Conservation Genetics",
        "Age Reversal & Senolytics",
        "In Vivo Delivery Systems",
        "Spatial Transcriptomics & Multi-Omics",
        "Organ-on-a-Chip & Human Digital Twins"
      ],
      hardware: [
        "CRISPR-Cas9/gene editing systems",
        "Next-gen sequencers (Illumina NovaSeq)",
        "Flow cytometers with 20+ parameters",
        "Confocal and super-resolution microscopes",
        "Mass spectrometers (Orbitrap)",
        "Bioreactors (1L-1000L scale)",
        "Organ-on-chip microfluidic systems",
        "Biosafety level 2/3 laboratories"
      ],
      expertise: [
        "PhD in Bioengineering, Molecular Biology, or Biochemistry",
        "CRISPR and gene editing techniques",
        "Protein engineering and design",
        "Metabolic pathway optimization",
        "Stem cell biology and differentiation",
        "Bioinformatics and computational biology"
      ],
      software: [
        "SnapGene, Benchling",
        "CellDesigner, COPASI",
        "AlphaFold, Rosetta",
        "GATK, PLINK for genomics",
        "Scanpy, Seurat for single-cell",
        "Custom metabolic modeling"
      ]
    },
    {
      id: 6,
      title: "Robotics & Autonomous Systems",
      description: "Deploying intelligent physical agents",
      items: [
        "Collaborative Robots & Mobile Manipulators",
        "Swarm Robotics & Collective Intelligence",
        "Soft Robotics & Compliant Actuation",
        "Telepresence & High-Fidelity Teleoperation", 
        "Autonomous Vehicle Ecosystems",
        "Robotics-as-a-Service & Fleet Management",
        "Dynamic Legged Locomotion",
        "Aerial Manipulation & Construction",
        "Underwater & Space Robotics",
        "Disposable & Degradable Robotics"
      ],
      hardware: [
        "7-DOF collaborative robot arms",
        "Swarm robot testbeds (100+ units)",
        "Hydraulic/pneumatic actuation systems",
        "Haptic feedback devices (10+ DoF)",
        "Autonomous vehicle platforms",
        "Underwater ROVs with manipulators",
        "Space-grade components (radiation-hardened)",
        "High-speed motion capture systems"
      ],
      expertise: [
        "PhD in Robotics, Mechanical Engineering, or CS",
        "SLAM and state estimation",
        "Motion planning and control",
        "Multi-robot coordination",
        "Mechatronics and embedded systems",
        "Computer vision for robotics"
      ],
      software: [
        "ROS 2, Gazebo, Webots",
        "Open Motion Planning Library",
        "CUDA-accelerated perception",
        "AirSim for aerial robotics",
        "Custom fleet management systems",
        "Real-time Linux (PREEMPT_RT)"
      ]
    },
    {
      id: 7,
      title: "Macro-Scale Systems & Infrastructure",
      description: "Engineering the built world and global systems",
      items: [
        "Advanced Additive Manufacturing",
        "Smart Grids & Demand Response",
        "Carbon Capture, Utilization & Storage",
        "Precision Agriculture & Closed-Loop Food Systems",
        "Next-Gen Water Systems",
        "Autonomous Logistics & Supply Chains", 
        "Resilient & Adaptive Infrastructure",
        "Advanced Nuclear Systems",
        "Orbital & Space Infrastructure",
        "Global Modeling & Digital Twins"
      ],
      hardware: [
        "Multi-material 3D printers (metal, ceramic)",
        "Grid-scale battery storage (100MWh+)",
        "Direct air capture units",
        "Vertical farming automation",
        "Reverse osmosis desalination plants",
        "Autonomous warehouse systems",
        "Structural health monitoring networks",
        "Small modular reactor testbeds"
      ],
      expertise: [
        "PhD in Civil, Mechanical, or Environmental Engineering",
        "Supply chain optimization",
        "Energy systems modeling",
        "Structural dynamics and monitoring",
        "Nuclear engineering and safety",
        "Large-scale system integration"
      ],
      software: [
        "ANSYS, ABAQUS for FEA",
        "PSS®E, PowerFactory for grid simulation",
        "AnyLogic for system dynamics",
        "Digital twin platforms",
        "Supply chain optimization solvers",
        "Climate and economic models"
      ]
    },
    {
      id: 8,
      title: "Human-Interface & Experience",
      description: "How humans interact with and are enhanced by technology",
      items: [
        "Brain-Computer Interfaces for Restoration & Augmentation",
        "Spatial Computing & The Metaverse",
        "Haptic Hyper-Reality & Volumetric Displays",
        "Emotive AI & Affective Computing",
        "Cognitive Augmentation & Neurostimulation",
        "Personalized Health Avatars & Continuous Monitoring",
        "Sensory Expansion & Substitution",
        "Voice-First & Ambient Interfaces",
        "AR/VR for Training & Simulation",
        "Bio-Feedback Fashion & Wearables"
      ],
      hardware: [
        "fNIRS/EEG brain imaging systems",
        "Varifocal AR/VR headsets",
        "Ultrasonic mid-air haptics",
        "Galvanic skin response sensors",
        "Transcranial magnetic stimulators",
        "Continuous glucose monitors",
        "Retinal projection displays",
        "Smart textile manufacturing"
      ],
      expertise: [
        "PhD in Neuroscience, HCI, or Biomedical Engineering",
        "Signal processing for biosignals",
        "User experience research",
        "Computer graphics and rendering",
        "Wearable electronics design",
        "Human factors engineering"
      ],
      software: [
        "Unity, Unreal Engine for XR",
        "OpenBCI, LabStreamingLayer",
        "OpenFace for emotion recognition",
        "Custom shaders and rendering",
        "Voice activity detection",
        "Biometric data fusion"
      ]
    },
    {
      id: 9,
      title: "Economic, Social & Governance Models",
      description: "The systems that organize human activity and trust",
      items: [
        "Decentralized Finance & Asset Tokenization",
        "Central Bank Digital Currencies",
        "Decentralized Autonomous Organizations",
        "AI-Driven Governance & Policy Simulation",
        "Universal Basic Assets & Post-Scarcity Economics",
        "Regenerative Finance & Impact Accounting",
        "Dynamic Pricing & Hyper-Personalized Commerce",
        "Everything-as-a-Service & Outcome-Based Economies",
        "Self-Sovereign Identity & Verifiable Credentials",
        "Predictive Procurement & Autonomous Corporations"
      ],
      hardware: [
        "High-performance blockchain nodes",
        "Quantum-resistant cryptographic modules",
        "Secure enclave processors",
        "Distributed ledger infrastructure",
        "High-frequency trading systems",
        "Zero-knowledge proof accelerators"
      ],
      expertise: [
        "PhD in Economics, Political Science, or Cryptography",
        "Game theory and mechanism design",
        "Blockchain and distributed systems",
        "Macroeconomic modeling",
        "Cryptographic protocol design",
        "Regulatory compliance and policy"
      ],
      software: [
        "Ethereum, Solana, Cosmos SDKs",
        "Zero-knowledge proof systems",
        "Economic simulation platforms",
        "Smart contract development",
        "Policy modeling tools",
        "Identity management systems"
      ]
    },
    {
      id: 10,
      title: "Meta-Frameworks & Cross-Cutting Principles",
      description: "The 'how' and 'why' that governs all other layers",
      items: [
        "Cross-Domain Fusion",
        "Ethics, Safety & Alignment by Design",
        "Radical Interoperability & Open Standards",
        "Explainability & Transparency by Default",
        "Resilience & Anti-Fragility Engineering",
        "The Democratization of Capability",
        "Sustainability & Circularity as a First Principle",
        "Automated Discovery & Optimization",
        "Human-Centric & Inclusive Design",
        "The 'Second-Order' Platform Strategy"
      ],
      hardware: [
        "Cross-layer integration testbeds",
        "Ethical AI auditing systems",
        "Interoperability protocol validators",
        "Explainability visualization systems",
        "Resilience testing environments",
        "Accessibility testing equipment"
      ],
      expertise: [
        "PhD in Systems Engineering, Ethics, or Complex Systems",
        "Cross-disciplinary integration",
        "Ethical framework development",
        "Standardization processes",
        "System safety and verification",
        "Inclusive design methodology"
      ],
      software: [
        "Model cards and datasheets",
        "Interoperability frameworks",
        "Explainability toolkits (SHAP, LIME)",
        "Resilience testing platforms",
        "Accessibility evaluation tools",
        "Cross-domain simulation environments"
      ]
    }
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Innovation Stack - Complete 10-Layer Architecture" size="max-w-6xl">
      <div className="p-6 space-y-6">
        <div className="text-center mb-6">
          <p className="text-gray-600 text-lg">
            106 technological capabilities across 10 integrated layers - Building sovereign technological ecosystems
          </p>
        </div>

        <div className="space-y-4">
          {stackLayers.map((layer) => (
            <div key={layer.id} className="border border-amber-200 rounded-xl overflow-hidden hover:border-amber-300 transition-colors">
              <button
                onClick={() => setExpandedLayer(expandedLayer === layer.id ? null : layer.id)}
                className="w-full p-6 bg-gradient-to-r from-amber-50 to-amber-100 hover:from-amber-100 hover:to-amber-200 transition-all flex items-center justify-between text-left"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {layer.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{layer.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{layer.description}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span>{layer.items.length} capabilities</span>
                    <span>•</span>
                    <span>{layer.hardware.length} hardware systems</span>
                    <span>•</span>
                    <span>{layer.software.length} software tools</span>
                  </div>
                </div>
                <CaretDown 
                  size={24} 
                  className={`transition-transform flex-shrink-0 ${expandedLayer === layer.id ? 'rotate-180' : ''}`}
                />
              </button>
              
              {expandedLayer === layer.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-6 bg-white border-t border-amber-100 space-y-6"
                >
                  {/* Capabilities List */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Core Capabilities:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {layer.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Hardware Requirements */}
                    <div className="bg-red-50 rounded-lg p-4">
                      <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                        <span>🔧</span> Hardware Requirements
                      </h4>
                      <ul className="space-y-2">
                        {layer.hardware.map((item, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-red-500">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expertise Needed */}
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                        <span>🎓</span> Expertise Required
                      </h4>
                      <ul className="space-y-2">
                        {layer.expertise.map((item, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-blue-500">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Software Stack */}
                    <div className="bg-green-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                        <span>💻</span> Software Stack
                      </h4>
                      <ul className="space-y-2">
                        {layer.software.map((item, index) => (
                          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                            <span className="text-green-500">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Example Integration */}
                  {layer.id === 1 && (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h4 className="font-semibold text-purple-800 mb-2">Example Vertical Integration:</h4>
                      <p className="text-sm text-gray-700">
                        <strong>Personalized Cancer Cure Service:</strong> Uses self-assembling lipid nanoparticles (L1) 
                        sequenced on specialized bio-ASIC (L2), designed by generative AI for drug discovery (L3), 
                        monitored by continuous liquid biopsy biosensor (L4), delivered as mRNA-based cancer vaccine (L5), 
                        manufactured in automated robotic bioreactor (L6), distributed via autonomous logistics (L7), 
                        prescribed through health avatar interface (L8), funded via DeFi insurance (L9), 
                        governed by ethical genetic data framework (L10).
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">Total Sovereign Capability</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">10</div>
              <div className="text-amber-100 text-sm">Integrated Layers</div>
            </div>
            <div>
              <div className="text-2xl font-bold">106</div>
              <div className="text-amber-100 text-sm">Core Capabilities</div>
            </div>
            <div>
              <div className="text-2xl font-bold">80+</div>
              <div className="text-amber-100 text-sm">Hardware Systems</div>
            </div>
            <div>
              <div className="text-2xl font-bold">60+</div>
              <div className="text-amber-100 text-sm">Software Stacks</div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
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
// MAIN COMPONENTS
// ------------------------------------------------------------------

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

const LazyLottie = ({ animationData, className }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <div ref={ref} className="w-full flex justify-center">
      {inView ? (
        <Lottie animationData={animationData} className={className} loop autoplay />
      ) : (
        <div className={`rounded-xl  animate-pulse ${className}`} />
      )}
    </div>
  );
};

const TimelineJourney = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: "FOUNDATIONAL PHASE",
      subtitle: "Day -90 to Day 0",
      color: "amber",
      subphases: [
        {
          period: "-90 to -60 Days",
          title: "Global Pipeline & Team Setup",
          tasks: [
            "Identify 30+ critical needs across MENA & global sectors",
            "Launch national recruitment campaign for 100+ engineers",
            "Set up learning platform & lab infrastructure",
            "Begin STSP core team hiring process"
          ],
          metrics: ["30+ Challenges", "100+ Applicants", "Platform Ready"]
        },
        {
          period: "-60 to -30 Days", 
          title: "Program Architecture & Team Formation",
          tasks: [
            "Build 10 expert-led implementation video courses",
            "Deploy estrateji.com/stsp learning portal",
            "Conduct technical assessments & interviews",
            "Form startup teams around validated challenges"
          ],
          metrics: ["10 Courses", "Teams Formed", "Portal Live"]
        },
        {
          period: "-30 to 0 Days",
          title: "Intensive Preparation & Readiness", 
          tasks: [
            "1-week team immersion with STSP core team",
            "Complete course curriculum & hands-on labs",
            "Final team formations & role assignments",
            "Zero-Day readiness & milestone planning"
          ],
          metrics: ["Immersion Week", "Labs Complete", "Ready to Build"]
        }
      ]
    },
    {
      title: "BUILD PHASE", 
      subtitle: "Day 1 to Day 90",
      color: "green",
      subphases: [
        {
          period: "Day 1-30",
          title: "Solution Sprint & First Win",
          tasks: [
            "Conduct 50+ user/customer interviews",
            "Build minimal technical proof points", 
            "Achieve 'First Win' - initial breakthrough",
            "Data-driven kill/pivot decisions at Day 30"
          ],
          metrics: ["50+ Interviews", "First Win", "Kill Decisions"]
        },
        {
          period: "Day 31-60",
          title: "Proof-of-Concept Build",
          tasks: [
            "Develop working integrated prototype",
            "Deploy with 3+ pilot customers", 
            "Performance optimization & security implementation",
            "Live demonstrations to stakeholders"
          ],
          metrics: ["Working Prototype", "3+ Pilots", "Live Demos"]
        },
        {
          period: "Day 61-90",
          title: "Venture Preparation & Launch",
          tasks: [
            "Secure 3+ paying pilot customers",
            "Develop scale plans & investment materials", 
            "Company incorporation & legal setup",
            "Demo Day preparation & venture spin-out"
          ],
          metrics: ["Paying Customers", "Scale Plans", "Demo Day"]
        }
      ]
    }
  ];

  const milestones = [
    { day: "-30", title: "Team Readiness", phase: 0 },
    { day: "0", title: "Zero-Day Launch", phase: 0 },
    { day: "30", title: "First Win Validation", phase: 1 },
    { day: "60", title: "Prototype Review", phase: 1 }, 
    { day: "90", title: "Venture Spin-out", phase: 1 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            STSP Program Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From global challenge identification to sovereign venture launch in 180 days
          </p>
        </div>

        {/* Phase Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 border border-amber-200 shadow-sm">
            {phases.map((phase, index) => (
              <button
                key={phase.title}
                onClick={() => setActivePhase(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activePhase === index
                    ? phase.color === 'amber' 
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {phase.title}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Timeline Visualization */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 sticky top-6">
              <h3 className="font-bold text-gray-900 mb-4">Journey Milestones</h3>
              
              {/* Timeline */}
              <div className="space-y-6 relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-amber-200"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 ${
                      milestone.phase === 0 ? 'bg-amber-500' : 'bg-green-500'
                    } ${activePhase === milestone.phase ? 'ring-4 ring-amber-200' : ''}`}>
                      <span className="text-white text-sm font-bold">{milestone.day}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{milestone.title}</div>
                      <div className="text-sm text-gray-500">Day {milestone.day}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Success Metrics */}
              <div className="mt-8 pt-6 border-t border-amber-100">
                <h4 className="font-semibold text-gray-900 mb-3">Program Success Metrics</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Talent Pipeline</span>
                    <span className="font-semibold">100+ → 25 founders</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Validated Ventures</span>
                    <span className="font-semibold">30+ → 10-15 ventures</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Working Prototypes</span>
                    <span className="font-semibold">10-15 with pilots</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sovereign Impact</span>
                    <span className="font-semibold">30+ patents filed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 border-2 border-amber-200">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  phases[activePhase].color === 'amber' ? 'bg-amber-500' : 'bg-green-500'
                }`}>
                  <span className="text-white font-bold text-lg">
                    {activePhase === 0 ? '🏗️' : '⚡'}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{phases[activePhase].title}</h3>
                  <p className="text-gray-600">{phases[activePhase].subtitle}</p>
                </div>
              </div>

              <div className="space-y-8">
                {phases[activePhase].subphases.map((subphase, index) => (
                  <motion.div
                    key={subphase.period}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-4 border-amber-300 pl-6 pb-8 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                      <div>
                        <div className="text-sm font-semibold text-amber-600 mb-1">
                          {subphase.period}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">
                          {subphase.title}
                        </h4>
                      </div>
                      
                      {/* Metrics */}
                      <div className="flex gap-2 flex-wrap">
                        {subphase.metrics.map((metric, metricIndex) => (
                          <span
                            key={metricIndex}
                            className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Tasks */}
                    <ul className="space-y-2">
                      {subphase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-start gap-3 text-gray-700">
                          <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          </div>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Continuous Processes */}
              <div className="mt-8 pt-6 border-t border-amber-100">
                <h4 className="font-semibold text-gray-900 mb-4">Continuous Innovation Processes</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="text-amber-600 font-semibold mb-2">🔄 CTIL Innovation Layer</div>
                    <p className="text-sm text-gray-700">Ongoing component sharing & reuse across all teams</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-green-600 font-semibold mb-2">🎓 Expert Mentorship</div>
                    <p className="text-sm text-gray-700">Weekly technical deep dives with domain specialists</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-blue-600 font-semibold mb-2">🤝 Stakeholder Engagement</div>
                    <p className="text-sm text-gray-700">Regular progress updates to government & industry partners</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InnovationStackLogoStrip = () => {
  const STACK_LAYERS = [
    { name: "Quantum Materials", color: "bg-amber-100 border-amber-200", icon: "🔬" },
    { name: "AI/ML Systems", color: "bg-amber-100 border-amber-200", icon: "🤖" },
    { name: "Biotech Engineering", color: "bg-amber-100 border-amber-200", icon: "🧬" },
    { name: "Robotics & Automation", color: "bg-amber-100 border-amber-200", icon: "⚙️" },
    { name: "Advanced Computing", color: "bg-amber-100 border-amber-200", icon: "💻" },
    { name: "Energy Systems", color: "bg-amber-100 border-amber-200", icon: "⚡" },
    { name: "Sovereign AI", color: "bg-amber-100 border-amber-200", icon: "🛡️" },
    { name: "Space Tech", color: "bg-amber-100 border-amber-200", icon: "🚀" },
    { name: "Advanced Materials", color: "bg-amber-100 border-amber-200", icon: "🔧" },
    { name: "Neurotech", color: "bg-amber-100 border-amber-200", icon: "🧠" },
    { name: "Quantum Computing", color: "bg-amber-100 border-amber-200", icon: "⚛️" },
    { name: "Climate Tech", color: "bg-amber-100 border-amber-200", icon: "🌍" },
    { name: "AgriTech", color: "bg-amber-100 border-amber-200", icon: "🌱" },
    { name: "FinTech", color: "bg-amber-100 border-amber-200", icon: "💳" },
    { name: "HealthTech", color: "bg-amber-100 border-amber-200", icon: "🏥" },
  ];

  const Row = ({ items, reverse = false }) => (
    <div className="relative overflow-hidden">
      <ul
        className={`flex items-center gap-6 sm:gap-10 py-3 ${
          reverse ? "animate-scroll-right" : "animate-scroll-left"
        }`}
        style={{ 
          width: 'max-content',
          // Fallback inline styles if Tailwind animations don't work
          animation: reverse 
            ? 'scrollRight 34s linear infinite' 
            : 'scrollLeft 34s linear infinite'
        }}
        aria-hidden="true"
      >
        {[...items, ...items].map((layer, i) => (
          <motion.li 
            key={`${layer.name}-${i}`} 
            className="shrink-0"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div
              className={`h-12 sm:h-14 px-3 sm:px-4 rounded-xl border-2 grid place-items-center ${layer.color} shadow-sm hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{layer.icon}</span>
                <span className="text-amber-800 text-xs sm:text-sm font-semibold text-center group-hover:text-amber-900 transition-colors">
                  {layer.name}
                </span>
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="w-full relative overflow-hidden bg-white">
      {/* Add inline styles as fallback */}
      <style jsx>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
      
      <div className="max-w-full mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div>
              <div className="text-amber-600 font-semibold text-[11px] tracking-wide uppercase">
                Innovation Stack Layers
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
                15+ Technological Verticals
              </h3>
            </div>
          </div>
          <p className="text-base sm:text-lg text-gray-600 w-full mx-auto">
            Sovereign capabilities across the complete innovation spectrum
          </p>
        </div>
        
        <div className="space-y-2">
          <Row items={STACK_LAYERS} />
          <Row items={STACK_LAYERS} reverse />
        </div>
      </div>
    </section>
  );
};
const TimelineSection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Selection & Assembly",
      duration: "Day -30 to 0",
      tasks: ["Curate 100+ Problem Dossiers", "Recruit Elite Engineers", "Team Formation", "Zero-Day Plan Approval"],
      icon: "🎯",
    },
    {
      phase: "Phase 2",
      title: "Solution Sprint", 
      duration: "Day 1-30",
      tasks: ["Achieve 'First Win'", "Technical Validation", "Kill Switch Decisions", "CTIL Module Identification"],
      icon: "⚡",
    },
    {
      phase: "Phase 3",
      title: "Proof-of-Concept Build",
      duration: "Day 31-60", 
      tasks: ["Integrated Prototype", "Pilot Partner Integration", "Scalability Sniff Test", "Live Demo Validation"],
      icon: "🔧",
    },
    {
      phase: "Phase 4",
      title: "Demo-Ready Polish",
      duration: "Day 61-90",
      tasks: ["Secure 3 Pilot Customers", "Scale Plan Development", "Demo Day Preparation", "Venture Spin-out Ready"],
      icon: "🚀",
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            {/* <LazyLottie 
              animationData={timelineAnim} 
              className="w-16 h-16" 
              containerClassName="flex-shrink-0"
            /> */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">90-Day Sovereign Build Cycle</h2>
              <p className="text-lg sm:text-xl text-gray-600 mt-2">
                مصنع المشاريع السيادية - Sovereign Venture Factory
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-3 w-6 h-0.5 bg-amber-300 z-0 group-hover:bg-green-400 transition-colors" />
              )}
              
              <div className="bg-white border-2 border-amber-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-300 h-full flex flex-col relative z-10 group-hover:border-amber-300">
                <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl p-4 -mx-2 -mt-2 mb-4 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-2xl">{phase.icon}</div>
                    <div className="text-amber-100 text-sm font-semibold">{phase.phase}</div>
                  </div>
                  <h3 className="text-xl font-bold">{phase.title}</h3>
                  <div className="text-amber-100 text-sm font-medium mt-1">{phase.duration}</div>
                </div>
                
                <ul className="space-y-3 flex-grow">
                  {phase.tasks.map((task, taskIndex) => (
                    <motion.li 
                      key={taskIndex} 
                      className="flex items-start gap-3 text-gray-700"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <CheckCircle size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{task}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const [expandedMember, setExpandedMember] = useState(null);

  const leadership = [
    {
      name: "Dr. Alrohaimi", 
      role: "KTSP President - The Architect",
      expertise: "Biotech, Healthcare Innovation, National Strategy",
      shortDescription: "Seasoned leader with deep roots in Saudi Arabia's innovation ecosystem.",
      fullDescription: "Dr. Alrohaimi brings over 15 years of experience in healthcare innovation and national strategy development. As a master of system navigation and sovereign mission alignment, he has been instrumental in shaping Saudi Arabia's biotech landscape and establishing critical partnerships between academia, industry, and government.",
      achievements: [
        "Led development of clinical trial infrastructure in the Kingdom",
        "Published 50+ research papers in high-impact journals",
        "Established multiple excellence centers in biotechnology",
        "Advisor to Saudi Food and Drug Authority (SFDA)"
      ],
      image: "https://res.cloudinary.com/dyeomcmin/image/upload/v1762491408/1738516948980_frrcsz.jpg",
      color: "bg-gradient-to-br from-green-900 to-green-700",
      textColor: "text-white"
    },
    {
      name: "Sebastien Fenelon",
      role: "KTSP Director - The Futurist",
      expertise: "Sovereign Systems Architecture, AI/ML, Edge Computing, Automation",
      shortDescription: "Visionary technologist with proven track record in sovereign AI systems.",
      fullDescription: "Sebastien Fenelon is a systems architect and entrepreneur focused on privacy-first, sovereign technology. With expertise spanning edge computing, AI/ML, and secure systems design, he has built multiple ventures addressing critical infrastructure needs in regulated environments. His work emphasizes practical innovation that balances cutting-edge technology with real-world constraints.",
      achievements: [
        "Founded InthraOS for privacy-first edge AI systems",
        "Pioneered sovereign intelligence architectures",
        "Built compliance-first AI deployment platforms",
        "Expert in HIPAA/GDPR/EU AI Act compliance"
      ],
      image: "https://res.cloudinary.com/dyeomcmin/image/upload/v1762492100/092b5938-dbb5-4c88-879e-cbb7abbea109_llxifo.jpg",
      color: "bg-gradient-to-br from-amber-400 to-amber-600",
      textColor: "text-gray-900"
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30 justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">World-Class Leadership Team</h2>
              <p className="text-lg sm:text-xl text-gray-600 mt-2">
                فريق قيادي ذو قدرات عالمية وأثر محلي
              </p>
            </div>
          </div>
        </div>

        {/* Team Structure & Specialists Overview */}
        <div className="bg-white/80 backdrop-blur-sm border-2 border-amber-200 rounded-2xl p-6 mb-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Users size={24} className="text-amber-500" />
                Core Leadership Structure
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-amber-100">
                  <span className="text-gray-700">Executive Leadership</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">2 Members</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-amber-100">
                  <span className="text-gray-700">Operational Team</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">5 Members</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Total Core Team</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">7 Members</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <ShieldCheck size={24} className="text-green-500" />
                Technical Expert Pool
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-green-100">
                  <span className="text-gray-700">Domain Specialists</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">10-15 Experts</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span>Quantum Materials & Physics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>AI/ML & Advanced Algorithms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Biotechnology & Engineering Biology</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Robotics & Autonomous Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Context */}
          <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-sm text-amber-800 text-center">
              <strong>Hybrid Leadership Model:</strong> Combining deep local expertise with global technical capabilities 
              to ensure sovereign mission success and sustainable innovation.
            </p>
          </div>
        </div>

        {/* Leadership Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 p-4">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div 
                className={`border-2 border-amber-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-green-200/30 transition-all duration-300 ${leader.color} ${leader.textColor}`}
                onMouseEnter={() => setExpandedMember(leader.name)}
                onMouseLeave={() => setExpandedMember(null)}
              >
                {/* Mobile-first layout: Stack image and text vertically */}
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-6">
                  {/* Image container - full width on mobile, fixed width on desktop */}
                  <div className="relative w-full lg:w-48 flex-shrink-0">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full lg:w-48 h-48 lg:h-48 rounded-2xl object-cover border-4 border-white/20 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Text content - full width on mobile */}
                  <div className="flex-grow text-center lg:text-left w-full">
                    <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                    <p className={`font-semibold mb-2 ${leader.textColor === 'text-white' ? 'text-amber-200' : 'text-amber-700'}`}>
                      {leader.role}
                    </p>
                    <p className={`text-sm opacity-90 ${leader.textColor === 'text-white' ? 'text-amber-100' : 'text-amber-800'}`}>
                      {leader.expertise}
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: expandedMember === leader.name ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <p className="leading-relaxed text-sm text-center lg:text-left">
                    {expandedMember === leader.name ? leader.fullDescription : leader.shortDescription}
                  </p>

                  {expandedMember === leader.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-white/10 rounded-xl p-4"
                    >
                      <h4 className="font-semibold mb-3 text-amber-50 text-center lg:text-left">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {leader.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle size={16} className="text-amber-300 flex-shrink-0 mt-0.5" />
                            <span className="text-amber-50/90">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  <div className="flex justify-center lg:justify-end">
                    <div className="text-amber-200 text-sm font-medium flex items-center gap-1 cursor-pointer">
                      {expandedMember === leader.name ? "View Less" : "View More"}
                      <motion.div
                        animate={{ rotate: expandedMember === leader.name ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CaretDown size={16} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const CTAForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    nationalId: "",
    technicalDomains: "",
    problemFocus: "",
    portfolioUrl: "",
    projectComplexity: "",
    learningApproach: "",
    visionStatement: ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 2000);
  };

  const technicalDomains = [
    "AI/ML Engineering", "Cloud Infrastructure", "Biotech & Healthcare", "Quantum Computing",
    "Robotics & Automation", "Cybersecurity", "Blockchain & Web3", "IoT & Embedded Systems",
    "Data Science & Analytics", "Mobile Development", "Web Development", "DevOps & Platform Engineering"
  ];

  const problemAreas = [
    "Healthcare Access & Innovation",
    "Sustainable Energy Solutions",
    "Smart Cities & Infrastructure",
    "Financial Technology Inclusion",
    "Agricultural Technology",
    "Education Technology",
    "Climate & Environmental Tech",
    "Logistics & Supply Chain",
    "Manufacturing & Industry 4.0",
    "Digital Government Services"
  ];

  return (
    <section id="apply" className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">انضم إلى بناة المستقبل السيادي</h2>
          <p className="text-lg text-gray-600 mt-2">
            Join Saudi Arabia's Sovereign Technology Builders
          </p>
        </div>

        {!submitted ? (
          <div className="bg-white border border-amber-200 rounded-2xl shadow-lg">
            {/* Compact View */}
            {!isExpanded && (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Rocket size={32} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Build Sovereign Technology?</h3>
                <p className="text-gray-600 mb-6">
                  Join the first cohort of Saudi engineers shaping our technological future
                </p>
                <button
                  onClick={() => setIsExpanded(true)}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Start Application
                </button>
                <p className="text-xs text-gray-500 mt-4">
                  📋 Required: Complete your free portfolio at echos.io first
                </p>
              </div>
            )}

            {/* Expanded Form */}
            {isExpanded && (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900">STSP Application</h3>
                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Basic Info */}
                <div className="space-y-4 mb-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">الاسم الكامل *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">الهوية الوطنية *</label>
                    <input
                      type="text"
                      name="nationalId"
                      value={form.nationalId}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                      required
                      pattern="[0-9]{10}"
                    />
                  </div>
                </div>

                {/* Technical Domains Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    🛠️ Main Technical Domains (Select 2-3) *
                  </label>
                  <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto border border-gray-200 rounded-lg p-3">
                    {technicalDomains.map((domain) => (
                      <label key={domain} className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          name="technicalDomains"
                          value={domain}
                          onChange={(e) => {
                            const selected = form.technicalDomains.split(',').filter(Boolean);
                            if (e.target.checked && selected.length < 3) {
                              selected.push(domain);
                            } else {
                              const index = selected.indexOf(domain);
                              if (index > -1) selected.splice(index, 1);
                            }
                            setForm({...form, technicalDomains: selected.join(',')});
                          }}
                          className="rounded border-amber-300 text-amber-600 focus:ring-amber-500"
                        />
                        <span className="text-xs">{domain}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Problem Areas Selection */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    🎯 Problem Areas You Want to Solve (Select 1-2) *
                  </label>
                  <div className="grid grid-cols-1 gap-2 max-h-40 overflow-y-auto border border-gray-200 rounded-lg p-3">
                    {problemAreas.map((problem) => (
                      <label key={problem} className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          name="problemFocus"
                          value={problem}
                          onChange={(e) => {
                            const selected = form.problemFocus.split(',').filter(Boolean);
                            if (e.target.checked && selected.length < 2) {
                              selected.push(problem);
                            } else {
                              const index = selected.indexOf(problem);
                              if (index > -1) selected.splice(index, 1);
                            }
                            setForm({...form, problemFocus: selected.join(',')});
                          }}
                          className="rounded border-green-300 text-green-600 focus:ring-green-500"
                        />
                        <span>{problem}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* NEW: Project Complexity Question - Text Input */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    🚀 Describe the most complex technical project you've built *
                  </label>
                  <textarea
                    name="projectComplexity"
                    value={form.projectComplexity}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    required
                    placeholder="Tell us about the technical challenges, your role, and what you learned..."
                    maxLength="400"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {form.projectComplexity.length}/400 characters - Show us your technical depth and problem-solving approach
                  </p>
                </div>

                {/* NEW: Learning Approach Question - Text Input */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    📚 How do you approach learning completely new technologies? *
                  </label>
                  <textarea
                    name="learningApproach"
                    value={form.learningApproach}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    required
                    placeholder="Describe your process for going from zero to proficiency in unfamiliar tech..."
                    maxLength="300"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {form.learningApproach.length}/300 characters - Help us understand your learning velocity
                  </p>
                </div>

                {/* Portfolio */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    🔗 echos.io Portfolio URL *
                  </label>
                  <input
                    type="url"
                    name="portfolioUrl"
                    value={form.portfolioUrl}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    required
                    placeholder="https://echos.io/your-profile"
                    pattern="https://echos.io/.*"
                  />
                </div>

                {/* Vision Statement */}
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    🌟 What impact do you want to make in Saudi Arabia's technology landscape over the next 5 years? *
                  </label>
                  <textarea
                    name="visionStatement"
                    value={form.visionStatement}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    required
                    placeholder="Describe your vision for contributing to Saudi Arabia's technological sovereignty..."
                    maxLength="350"
                  />
                  <p className="text-xs text-gray-500 mt-1">{form.visionStatement.length}/350 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
                >
                  {loading ? "جاري التقديم..." : "Submit Application"}
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <CheckCircle size={48} className="text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Application Received!</h3>
            <p className="text-gray-600 mb-4">
              We'll review your application and contact you within 24 hours.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200 max-w-md mx-auto">
              <p className="text-green-800 text-sm font-medium">
                📧 Technical challenge will be sent to your email within 24 hours
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
// ------------------------------------------------------------------
// MAIN PAGE
// ------------------------------------------------------------------

export default function KTSPProposal() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  const CTILSection = () => {
    const [activeExample, setActiveExample] = useState(0);
  
    const ctilExamples = [
      {
        id: 1,
        title: "Quantum Encryption Breakthrough",
        description: "Team A develops novel quantum-resistant encryption protocol",
        applications: [
          "Team B: Sovereign cloud infrastructure security",
          "Team C: Secure health data platform encryption",
          "Team D: Financial transaction system protection"
        ],
        impact: "3 teams accelerated by 6 weeks, 2 patent filings generated",
        icon: "🔐"
      },
      {
        id: 2,
        title: "Bio-Sensor Calibration Algorithm",
        description: "Team E creates advanced sensor calibration for medical devices",
        applications: [
          "Team F: Environmental monitoring system accuracy",
          "Team G: Agriculture IoT sensor networks",
          "Team H: Industrial equipment predictive maintenance"
        ],
        impact: "4 teams improved accuracy by 40%, reduced development time by 8 weeks",
        icon: "📡"
      },
      {
        id: 3,
        title: "AI-Powered Material Discovery",
        description: "Team I builds generative AI for advanced materials design",
        applications: [
          "Team J: Lightweight aerospace composites",
          "Team K: Energy-efficient building materials",
          "Team L: Biomedical implant surfaces"
        ],
        impact: "Accelerated material discovery from 2 years to 90 days",
        icon: "🧪"
      }
    ];
  
    const ctilFeatures = [
      {
        icon: "⚡",
        title: "Real-time Discovery",
        description: "AI agents continuously scan team progress to identify reusable breakthroughs"
      },
      {
        icon: "🔄",
        title: "Automated Packaging",
        description: "Breakthroughs are automatically packaged as standardized, documented modules"
      },
      {
        icon: "🎯",
        title: "Intelligent Distribution",
        description: "Relevant modules are proactively recommended to teams that need them"
      },
      {
        icon: "📊",
        title: "Impact Analytics",
        description: "Track how shared components accelerate development across all teams"
      }
    ];
  
    return (
      <section className="py-20 bg-gradient-to-br from-amber-50 to-green-50">
  
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
             
              <div>
                <div className="text-green-600 font-semibold text-sm tracking-wide uppercase">
                  Innovation Compounding Engine
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Cross-Team Innovation Layer (CTIL)
                </h2>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming individual breakthroughs into collective sovereign capability through systematic knowledge sharing and reuse
            </p>
          </div>
  
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - How CTIL Works */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-amber-200 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">The Innovation Compounding Engine</h3>
                
                <div className="space-y-6">
                  {ctilFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
  
                {/* CTIL Impact Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-amber-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-amber-600">6-8x</div>
                    <div className="text-sm text-amber-700">Acceleration Factor</div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">40%</div>
                    <div className="text-sm text-green-700">Reduced Development Time</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">100+</div>
                    <div className="text-sm text-blue-700">Reusable Modules</div>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-purple-700">AI Monitoring</div>
                  </div>
                </div>
              </div>
  
              {/* CTIL Process Flow */}
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">Systematic Innovation Flow</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span className="text-gray-700">AI agents monitor all team activities and code commits</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
                    <span className="text-gray-700">Breakthroughs automatically identified and validated</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">3</div>
                    <span className="text-gray-700">Components packaged with documentation and tests</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">4</div>
                    <span className="text-gray-700">Relevant teams notified of new capabilities</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">5</div>
                    <span className="text-gray-700">Usage analytics track cross-team impact</span>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Column - Live Examples */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-700 to-green-800 rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Live Innovation Examples</h3>
                <p className="text-green-100">Real breakthroughs being shared across teams right now</p>
              </div>
  
              {/* Example Carousel */}
              <div className="bg-white rounded-2xl border-2 border-amber-200 overflow-hidden">
                {ctilExamples.map((example, index) => (
                  <motion.div
                    key={example.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeExample === index ? 1 : 0.3 }}
                    className={`p-6 cursor-pointer transition-all ${
                      activeExample === index ? 'bg-amber-50 border-l-4 border-amber-500' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setActiveExample(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{example.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-bold text-gray-900 text-lg">{example.title}</h4>
                          {activeExample === index && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{example.description}</p>
                        
                        {activeExample === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="space-y-3"
                          >
                            <div>
                              <h5 className="font-semibold text-gray-900 mb-2">Accelerating Teams:</h5>
                              <ul className="space-y-1">
                                {example.applications.map((app, i) => (
                                  <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                    {app}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-green-50 rounded-lg p-3">
                              <h5 className="font-semibold text-green-800 text-sm">Compound Impact:</h5>
                              <p className="text-green-700 text-sm">{example.impact}</p>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              {/* CTIL Network Visualization */}
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200">
                <h4 className="font-bold text-gray-900 mb-4">Innovation Network Effect</h4>
                <div className="relative h-48 bg-gradient-to-br from-amber-50 to-green-50 rounded-xl border border-amber-200 flex items-center justify-center">
                  {/* Simplified network visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      CTIL
                    </div>
                  </div>
                  {/* Connecting nodes */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                      style={{
                        left: `${50 + 40 * Math.cos((i * Math.PI) / 3)}%`,
                        top: `${50 + 40 * Math.sin((i * Math.PI) / 3)}%`,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      T{i+1}
                    </motion.div>
                  ))}
                </div>
                <p className="text-center text-gray-600 text-sm mt-3">
                  6 teams actively sharing innovations through CTIL
                </p>
              </div>
            </div>
          </div>
  
          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 border-2 border-amber-200 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Build on Sovereign Innovation
              </h3>
              <p className="text-gray-600 mb-6">
                Join the growing network of teams accelerating each other's progress through systematic knowledge sharing
              </p>
              <button onClick={() => openModal('stack')} className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Explore CTIL Modules
              </button>
            </div>
          </div>
        </div>
      </section>
    );
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
                <div className="text-xl sm:text-2xl font-bold text-green-800">STSP</div>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <button onClick={() => openModal('mission')} className="text-gray-700 hover:text-green-800 transition-colors">
                  Mission
                </button>
                <button onClick={() => openModal('structure')} className="text-gray-700 hover:text-green-800 transition-colors">
                  Structure
                </button>
                <button onClick={() => openModal('stack')} className="text-gray-700 hover:text-green-800 transition-colors">
                  Stack
                </button>
                <button onClick={() => openModal('team')} className="text-gray-700 hover:text-green-800 transition-colors">
                  Team
                </button>
              </div>
            </div>
            <a href="#apply" className="bg-amber-500 hover:bg-green-800 text-white px-4 sm:px-6 py-2 rounded-lg font-semibold transition-colors text-sm sm:text-base">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* Modals */}
      <MissionModal isOpen={activeModal === 'mission'} onClose={closeModal} />
      <StructureModal isOpen={activeModal === 'structure'} onClose={closeModal} />
      <StackModal isOpen={activeModal === 'stack'} onClose={closeModal} />
      <TeamModal isOpen={activeModal === 'team'} onClose={closeModal} />

      <main className="pt-4  overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-4 sm:px-6 pt-16 sm:pt-20">
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
                <a href="#apply" className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors flex items-center gap-2 text-sm sm:text-base">
                  Join the First 100 <ArrowRight size={20} />
                </a>
                <button onClick={() => openModal('mission')} className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://res.cloudinary.com/dyeomcmin/image/upload/v1762551926/ChatGPT_Image_Nov_7_2025_04_44_18_PM_gy9css.png" 
                alt="Kingdom Technological Sovereignty Program Vision"
                className="w-full max-w-2xl "
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="py-16 sm:py-20 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">From Beneficiaries to Builders</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                  Vision 2030 has ignited a generation fluent in the language of innovation, AI, and entrepreneurship. 
                  Saudi engineers are now architects of national capability, not just participants in the workforce.
                </p>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                  The Kingdom Technological Sovereignty Program converts this transformation into sovereign technology, turning citizen talent 
                  into enduring economic assets and strategic capabilities.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">100+</div>
                    <div className="text-gray-600 text-sm sm:text-base">Elite Engineers</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">90</div>
                    <div className="text-gray-600 text-sm sm:text-base">Days to Demo</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">15+</div>
                    <div className="text-gray-600 text-sm sm:text-base">Tech Verticals</div>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
                    <div className="text-xl sm:text-2xl font-bold text-amber-600">10-15</div>
                    <div className="text-gray-600 text-sm sm:text-base">Ventures per Cohort</div>
                  </div>
                </div>
              </div>
              <img className="flex justify-center" src="https://res.cloudinary.com/dyeomcmin/image/upload/v1762491227/bg1_dnhvjr.png">
              </img>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <TimelineJourney />

        {/* Team Section */}
        <TeamSection />

        {/* Innovation Stack */}
        <InnovationStackLogoStrip />
        <CTILSection/>

        {/* CTA Form */}
        <CTAForm />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
            <div>

            <div className="flex items-center gap-3">
                <img src="https://res.cloudinary.com/dyeomcmin/image/upload/v1762551926/ChatGPT_Image_Nov_7_2025_04_44_18_PM_gy9css.png" className="w-10 h-10 sm:w-12 sm:h-12" />
                <div className="text-xl sm:text-2xl font-bold text-green-800">STSP</div>
              </div>              <p className="text-gray-400 text-sm sm:text-base">
                Building Saudi Arabia's sovereign technological future, one venture at a time.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Program</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <button onClick={() => openModal('mission')} className="block hover:text-white transition-colors">Mission</button>
                <button onClick={() => openModal('structure')} className="block hover:text-white transition-colors">Structure</button>
                <button onClick={() => openModal('stack')} className="block hover:text-white transition-colors">Stack</button>
                <button onClick={() => openModal('team')} className="block hover:text-white transition-colors">Team</button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <a href="#apply" className="block hover:text-white transition-colors">Apply</a>
                <div className="hover:text-white transition-colors">FAQ</div>
                <div className="hover:text-white transition-colors">Contact</div>
              </div>
            </div>
            {/* <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Partners</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <div>MCIT</div>
                <div>PIF</div>
                <div>SDAIA</div>
                <div>MISA</div>
              </div>
            </div> */}
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Kingdom Technological Sovereignty Program. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </BinaryBackground>
  );
}