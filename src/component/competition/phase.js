import { motion } from "framer-motion";

export default function ProgramPhases() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Program Structure
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Learn first, then apply. The program is designed in two phases to
            help students build confidence before competing.
          </p>
        </motion.div>

        {/* Phase 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-12"
        >
          <span className="text-sm font-semibold text-blue-600">
            Phase 1
          </span>
          <h3 className="text-2xl font-semibold mt-2 mb-4">
            Learning Phase
          </h3>
          <p className="text-gray-600 mb-6">
            Students attend interactive workshops and webinars to understand
            the fundamentals of business, innovation, and pitching.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-700">
              <li>• Identifying business opportunities</li>
              <li>• Design thinking & innovation</li>
              <li>• Branding and customer needs</li>
              <li>• Business models & strategy</li>
              <li>• Fundamentals of pitching</li>
            </ul>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-2">Outcome</h4>
              <p className="text-gray-600">
                Students gain clarity, creativity, and confidence to convert
                ideas into structured business concepts.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Phase 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900 text-white rounded-2xl p-8 md:p-12"
        >
          <span className="text-sm font-semibold text-yellow-400">
            Phase 2
          </span>
          <h3 className="text-2xl font-semibold mt-2 mb-4">
            Competition Phase
          </h3>
          <p className="text-gray-300 mb-6">
            Students apply their learning by pitching original business ideas
            individually or in teams.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Pitch Competition</h4>
              <p className="text-gray-300 text-sm">
                3–5 minute pitch explaining the problem, solution, target
                audience, business model, and impact.
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Case / Investment Challenge</h4>
              <p className="text-gray-300 text-sm">
                Optional challenge where students analyze a business scenario
                or evaluate a startup idea.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
