'use client';

import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Building Multi-tenant Kubernetes Platforms',
    description:
      'A deep dive into designing and implementing multi-tenant Kubernetes platforms with proper isolation and security.',
    date: '2024-06-15',
    link: 'https://medium.com/@sudo.anshul',
  },
  {
    title: 'AWS Landing Zones: A Practical Guide',
    description:
      'How to set up enterprise-grade AWS Landing Zones with Control Tower and custom guardrails.',
    date: '2024-03-20',
    link: 'https://medium.com/@sudo.anshul',
  },
  {
    title: 'GitOps with ArgoCD: Best Practices',
    description:
      'Implementing GitOps workflows with ArgoCD for reliable and auditable deployments.',
    date: '2024-01-10',
    link: 'https://medium.com/@sudo.anshul',
  },
];

export default function Writing() {
  return (
    <section
      id="blogs"
      className="py-32 px-6 md:px-12 bg-neutral-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-24 tracking-tighter"
        >
          WRITING
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block p-8 border border-white/10 rounded-2xl bg-neutral-900/50 hover:bg-neutral-900 transition-colors"
            >
              <div className="text-sm text-neutral-500 mb-4">{post.date}</div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed text-sm">
                {post.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
