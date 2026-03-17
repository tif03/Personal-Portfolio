/*

ones I led: https://www.youtube.com/watch?v=hWhxzaOUZOE, https://www.youtube.com/watch?v=WlQLmLiKvb4, https://www.youtube.com/watch?v=81mWF5P87fc, https://www.youtube.com/watch?v=JCO12c7SsBE, https://www.youtube.com/watch?v=dCG6lmjtavg ; 
ones i was just in: https://www.youtube.com/watch?v=zjYM-z7tWvs, https://www.youtube.com/watch?v=9wsqCfqDTL4, https://www.youtube.com/watch?v=-xR-q7exXRM, https://www.youtube.com/watch?v=877mqolDUDI, https://www.youtube.com/watch?v=iXtDY9Cwbbs, https://www.youtube.com/watch?v=mZqR-97u1-0, https://www.youtube.com/watch?v=fjh-usF4hPc

*/

export interface DanceVideo {
  id: string
  title: string
  led: boolean
}

export const danceVideos: DanceVideo[] = [
  { id: 'hWhxzaOUZOE', title: 'Fearless - Le Sserafim', led: true },
  { id: 'WlQLmLiKvb4', title: 'Love, Money, Fame - Seventeen', led: true },
  { id: '81mWF5P87fc', title: 'Wake Up - Ateez', led: true },
  { id: 'JCO12c7SsBE', title: 'Home;Run - Seventeen', led: true },
  { id: 'dCG6lmjtavg', title: 'Back Door - Stray Kids', led: true },
  { id: 'zjYM-z7tWvs', title: 'Bite Me - Enhypen', led: false },
  { id: '9wsqCfqDTL4', title: 'ETA - New Jeans', led: false },
  { id: '-xR-q7exXRM', title: 'Maestro - Seventeen', led: false },
  { id: '877mqolDUDI', title: 'Cyberpunk - Ateez', led: false },
  { id: 'iXtDY9Cwbbs', title: 'S-Class - Stray Kids', led: false },
  { id: 'mZqR-97u1-0', title: 'Ping Pong - HyunA & Dawn', led: false },
  { id: 'fjh-usF4hPc', title: 'Cry For Me - Twice', led: false },
]