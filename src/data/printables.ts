export type ChartItem = { emoji: string; label: string };

type Base = {
  slug: string;
  title: string; // H1 and card title
  seoTitle: string; // <title>, under 60 characters
  description: string;
  hub: string; // hub path this chart belongs to
  heading: string; // printed at the top of the sheet
  blurb: string; // one line on the printables index
};

export type WeeklyChart = Base & { kind: 'weekly'; items: ChartItem[] };
export type StickerChart = Base & { kind: 'sticker'; slots: number; perRow: number; slotLabel: string; goalPrompt: string };
export type Printable = WeeklyChart | StickerChart;

export const PRINTABLES: Printable[] = [
  {
    slug: 'chore-chart',
    kind: 'weekly',
    title: 'Weekly Chore Chart for Kids',
    seoTitle: 'Free Printable Chore Chart for Kids Ages 2–6',
    description:
      'A free printable weekly chore chart with picture chores for toddlers and preschoolers. Add your child’s name, edit the chores, and print.',
    hub: '/chore-charts/',
    heading: 'My Chores',
    blurb: 'Six picture chores across the week. Edit any chore before you print.',
    items: [
      { emoji: '🛏️', label: 'Make my bed' },
      { emoji: '🧸', label: 'Tidy up toys' },
      { emoji: '🧺', label: 'Clothes in hamper' },
      { emoji: '🍽️', label: 'Help set the table' },
      { emoji: '🐶', label: 'Feed the pet' },
      { emoji: '🪴', label: 'Water the plants' },
    ],
  },
  {
    slug: 'reward-chart',
    kind: 'sticker',
    title: 'Reward Chart (20 Stars)',
    seoTitle: 'Free Printable Reward Chart for Kids (20 Stars)',
    description:
      'A free printable reward chart with 20 star spaces and a box to draw the reward. Works for ages 4 to 6 or any longer goal.',
    hub: '/reward-charts/',
    heading: 'My Reward Chart',
    blurb: '20 spaces and a box to draw the reward. Best for ages 4 to 6.',
    slots: 20,
    perRow: 5,
    slotLabel: 'star',
    goalPrompt: 'I’m working toward:',
  },
  {
    slug: 'sticker-chart',
    kind: 'sticker',
    title: 'Toddler Sticker Chart (10 Stickers)',
    seoTitle: 'Free Printable Toddler Sticker Chart (10 Stickers)',
    description:
      'A free printable sticker chart with 10 big spaces, sized for toddlers who need a short, reachable goal.',
    hub: '/reward-charts/',
    heading: 'My Sticker Chart',
    blurb: 'Ten big spaces, so 2 and 3 year olds reach the reward fast.',
    slots: 10,
    perRow: 5,
    slotLabel: 'sticker',
    goalPrompt: 'When it’s full, I get:',
  },
  {
    slug: 'potty-training-chart',
    kind: 'sticker',
    title: 'Potty Training Sticker Chart',
    seoTitle: 'Free Printable Potty Training Sticker Chart',
    description:
      'A free printable potty training sticker chart with 30 spaces. One sticker for each try on the potty, and a reward when it’s full.',
    hub: '/potty-training-chart/',
    heading: 'I Used the Potty!',
    blurb: '30 spaces for every try on the potty, with a reward at the end.',
    slots: 30,
    perRow: 6,
    slotLabel: 'sticker',
    goalPrompt: 'When it’s full, I get:',
  },
  {
    slug: 'bedtime-routine-chart',
    kind: 'weekly',
    title: 'Bedtime Routine Chart',
    seoTitle: 'Free Printable Bedtime Routine Chart for Toddlers',
    description:
      'A free printable bedtime routine chart with picture steps for toddlers and preschoolers: bath, pajamas, teeth, potty, story, lights out.',
    hub: '/toddler-routines/',
    heading: 'My Bedtime Routine',
    blurb: 'Bath, pajamas, teeth, potty, story, lights out, in the same order every night.',
    items: [
      { emoji: '🛁', label: 'Bath time' },
      { emoji: '👕', label: 'Pajamas on' },
      { emoji: '🦷', label: 'Brush teeth' },
      { emoji: '🚽', label: 'Potty' },
      { emoji: '📖', label: 'Story' },
      { emoji: '🌙', label: 'Lights out' },
    ],
  },
  {
    slug: 'morning-routine-chart',
    kind: 'weekly',
    title: 'Morning Routine Chart',
    seoTitle: 'Free Printable Morning Routine Chart for Toddlers',
    description:
      'A free printable morning routine chart with picture steps for toddlers and preschoolers: potty, dressed, breakfast, teeth, shoes, backpack.',
    hub: '/toddler-routines/',
    heading: 'My Morning Routine',
    blurb: 'Potty, dressed, breakfast, teeth, shoes, out the door.',
    items: [
      { emoji: '🚽', label: 'Potty' },
      { emoji: '👕', label: 'Get dressed' },
      { emoji: '🥣', label: 'Eat breakfast' },
      { emoji: '🦷', label: 'Brush teeth' },
      { emoji: '👟', label: 'Shoes on' },
      { emoji: '🎒', label: 'Grab my backpack' },
    ],
  },
];

export const getPrintable = (slug: string) => PRINTABLES.find((p) => p.slug === slug);
