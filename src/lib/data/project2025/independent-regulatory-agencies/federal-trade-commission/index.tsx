import { ChapterType } from '@/lib/data/project2025/types';

const federalTradeCommission: ChapterType = {
  chapterIdx: 30,
  title: "Federal Trade Commission",
  chapterId: "federal-trade-commission",
  url: "/project2025/independent-regulatory-agencies/federal-trade-commission",
  emoji: "💰",
  description: "Aims to reduce competition regulations, potentially favoring large corporations.",
  metadata: {
    authors: [
      {
        name: "Adam Candeub",
        avatar: "https://example.com/images/authors/eleanor-rivers.jpg",
      },
    ],
    title: "Federal Trade Commission",
    wordcount: 6100,
    keywords: ["FTC Reform", "Market Competition", "Deregulation"],
    status: "undone",
  },
  summary: () => (
    <p>
      This chapter proposes changes to the Federal Trade Commission, emphasizing reduced competition
      regulations and favoring market-driven solutions. The reforms could lead to larger corporate
      monopolies and diminished consumer protections.
    </p>
  ),
};

export default federalTradeCommission;
