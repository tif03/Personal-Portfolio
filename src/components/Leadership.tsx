import { leadership } from '../data/leadership'
import type { LeadershipEntry } from '../data/leadership'

function Leadership() {
  return (
    <section id="leadership" className="py-24 px-8 max-w-3xl mx-auto">
      <h2 className="text-5xl font-bold mb-12" style={{fontFamily: 'DM Serif Display'}}>Leadership</h2>
      <div className="flex flex-col gap-6">
        {leadership.map((item: LeadershipEntry, index: number) => (
          <div key={index} className="bg-white border border-pink-light rounded-2xl p-6 shadow-sm">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-blue-dark">{item.org}</h3>
              <p className="text-gray-400 text-sm">{item.location}</p>
            </div>
            <div className="flex flex-col gap-6">
              {item.positions.map((pos, i) => (
                <div key={i}>
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-blue-dark text-sm">{pos.role}</p>
                    <span className="text-xs text-gray-400 whitespace-nowrap ml-4">{pos.date}</span>
                  </div>
                  <ul className="list-disc list-outside pl-4 flex flex-col gap-1">
                    {pos.bullets.map((bullet, j) => (
                      <li key={j} className="text-gray-600 text-sm leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Leadership