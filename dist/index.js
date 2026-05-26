/**
 * apc-journeys-data
 * ------------------
 * Canonical APC coaching journey content. Imported by:
 *   - APC Journeys / Inquiry Call Guide       (https://github.com/bookbran/APC-Journeys)
 *   - APC Intake Builder                       (https://github.com/bookbran/APC-Intake-Builder)
 *   - apc-crm milestone library (planned)      (https://github.com/bookbran/apc-crm)
 *
 * Update once here, propagate via `npm update apc-journeys-data` in each consumer.
 */
export const JOURNEYS = [
    {
        key: 'explorer',
        name: 'Career Explorer',
        tagline: 'Who you are, what energizes you, what could be next',
        description: "For clients who don't yet know what they want to do next and have time and runway to do the work of figuring it out. Three phases over ~7 sessions: self-discovery, guided mapping with the coach, and a pathway plan they walk away with.",
        bestFor: [
            'Has months of financial runway',
            'Open to a step down in pay if it leads somewhere right',
            'Wants insight before action',
            'Curious, reflective, ready to do exploration work',
        ],
        notIdealWhen: [
            'Needs a job in weeks, not months',
            'Pressure to land high-income work fast',
            'Already clear on direction — Pivot or Advancing fits better',
        ],
        recommendedCoaches: 'Krute, Autumn, Ursina',
        sessionCount: '~7 sessions · 3 phases',
        badgeColor: '#f26727',
        phases: [
            {
                id: 1,
                name: 'Self-Discovery',
                subtitle: 'Who you are, what energizes you',
                color: '#54558e',
                sessions: [
                    {
                        id: 1,
                        title: 'Story & Interests',
                        activities: [
                            'Share life story & career history',
                            'Explore interests across decades',
                            'Identify energizing themes',
                            'Build psychological safety',
                        ],
                        homework: 'IPIP 300 & 16 Personalities assessments',
                    },
                    {
                        id: 2,
                        title: 'Personality & Self-Discovery',
                        activities: [
                            'Debrief assessment results',
                            'Map traits to past work',
                            'Identify thriving environments',
                            'Connect insights to directions',
                        ],
                        homework: 'Motivated Skills Matrix & Gallup Strengths',
                    },
                    {
                        id: 3,
                        title: 'Strengths & Preferences',
                        activities: [
                            'Review strengths assessment',
                            'Build Career Preferences Model',
                            'Connect strengths to values',
                            'Discuss with trusted peer',
                        ],
                        homework: 'Refine preferences; discuss top criteria',
                    },
                ],
            },
            {
                id: 2,
                name: 'Guided Mapping',
                subtitle: 'Exploring the world of possibilities together',
                color: '#2DA3CB',
                sessions: [
                    {
                        id: 4,
                        title: 'Industry Discovery',
                        activities: [
                            'Finalize Preferences Model',
                            'AI & O*NET exploration',
                            'Real-time energy check',
                            'Select 3–4 target industries',
                        ],
                        homework: 'Read articles on two industries of interest',
                    },
                    {
                        id: 5,
                        title: 'Org & Role Exploration',
                        activities: [
                            'Co-browse target companies',
                            'Analyze job postings together',
                            'Build target list in real-time',
                            'Note curiosity triggers',
                        ],
                        homework: 'Curiosity conversation outreach',
                    },
                    {
                        id: 6,
                        title: 'Networking for Exploration',
                        activities: [
                            'Debrief curiosity conversation',
                            'Draft outreach messages',
                            'Role-play interview questions',
                            'Identify confirmation needs',
                        ],
                        homework: 'Send outreach; conduct interviews',
                    },
                ],
            },
            {
                id: 3,
                name: 'Pathway Planning',
                subtitle: 'Your plan forward',
                color: '#f26727',
                sessions: [
                    {
                        id: 7,
                        title: 'Synthesis & Roadmap',
                        activities: [
                            'Review all learnings',
                            'Filter via Preferences Model',
                            'Co-create transition roadmap',
                            'Define clear next steps',
                        ],
                        homework: null,
                    },
                ],
            },
        ],
    },
    {
        key: 'pivot',
        name: 'Pivot',
        tagline: 'Something different — and bridges to get there within a year',
        description: 'For clients who want change and need a role within months, not years. Three phases over ~8 sessions: self-discovery, guided mapping with the coach, and search & interview prep, with Joanie working materials in parallel.',
        bestFor: [
            'Wants different work',
            'Needs a role within ~12 months',
            '$75K+ income target',
            'Open to bridge roles that move them in the right direction',
            'Ready to act while exploring',
        ],
        notIdealWhen: [
            'Has months of runway and wants to go deeper before deciding (Explorer)',
            'Already locked on target role + industry (Advancing)',
        ],
        recommendedCoaches: 'Aimee, Victoria, Emily, Autumn',
        sessionCount: '~8 sessions · 3 phases',
        badgeColor: '#54558e',
        phases: [
            {
                id: 1,
                name: 'Self-Discovery',
                subtitle: 'Sessions 1–2',
                color: '#16163f',
                sessions: [
                    {
                        id: 1,
                        title: 'Review & Insight',
                        activities: [
                            'Walk through resume & history',
                            'Identify energy drains & gains',
                            'Map patterns & core strengths',
                            'Foundation for preferences model',
                        ],
                        homework: 'Complete Motivated Skills Matrix & Gallup Strengths',
                    },
                    {
                        id: 2,
                        title: 'Preferences Model',
                        activities: [
                            'Debrief assessments',
                            'Build Career Preferences Model (6–8 criteria)',
                            'Connect strengths to directions',
                            'Discuss model with a confidant',
                        ],
                        homework: 'Refine model; coach preps initial research',
                    },
                ],
            },
            {
                id: 2,
                name: 'Guided Mapping',
                subtitle: 'Sessions 3–5 · Coach & client side-by-side',
                color: '#54558e',
                sessions: [
                    {
                        id: 3,
                        title: 'Industry Discovery',
                        activities: [
                            'Finalize preferences model',
                            'Co-explore industries via AI & O*NET',
                            'Review coach-researched listings',
                            'Real-time energy check',
                        ],
                        homework: 'Browse LinkedIn of 2–3 interesting companies',
                    },
                    {
                        id: 4,
                        title: 'Targeting & LinkedIn',
                        activities: [
                            'Analyze target companies & profiles',
                            'Finalize target organization list',
                            "Coach-led LinkedIn 'About' draft",
                            'Update Experience section',
                        ],
                        homework: 'Post LinkedIn About; meet Joanie for docs',
                    },
                    {
                        id: 5,
                        title: 'Networking Launch',
                        activities: [
                            "Review Joanie's materials",
                            'Draft outreach messages together',
                            'Build networking target list',
                            'Set application rhythm',
                        ],
                        homework: 'Send drafted messages; apply to 3–5 roles',
                    },
                ],
            },
            {
                id: 3,
                name: 'Search & Interview',
                subtitle: 'Sessions 6–8 · Show up with confidence',
                color: '#f26727',
                sessions: [
                    {
                        id: 6,
                        title: 'Strategy & Story',
                        activities: [
                            'Check networking progress',
                            "Build 'Tell Me About Yourself'",
                            'Intro C-C-A-R framework',
                            'Practice intro out loud',
                        ],
                        homework: 'Practice intro; draft two C-C-A-R stories',
                    },
                    {
                        id: 7,
                        title: 'Refinement',
                        activities: [
                            'Strengthen C-C-A-R stories',
                            'Practice behavioral questions',
                            'Address gaps or pivots',
                            'Develop questions for interviewers',
                        ],
                        homework: 'Revise stories; continue applications',
                    },
                    {
                        id: 8,
                        title: 'Mock Interview',
                        activities: [
                            'Full realistic mock interview',
                            'Structured debrief & feedback',
                            'Final confidence prep',
                            'Launch into your new chapter',
                        ],
                        homework: null,
                    },
                ],
            },
        ],
    },
    {
        key: 'advancing',
        name: 'Advancing Job Search',
        tagline: 'Strategy, materials, and confidence — moving fast',
        description: "For clients who already know where they're headed and want a tight, focused job search. Three phases over ~6 sessions: target setting, guided mapping, and search & interview prep, with Joanie working materials in parallel.",
        bestFor: [
            'Clear on role + industry',
            'Active search underway or ready to start',
            'Wants accountability and edge',
            'Materials likely already in motion (or going there with Joanie)',
        ],
        notIdealWhen: [
            'Still figuring out what they want — Explorer or Pivot fits better',
            'Heavy applications + low response rate suggests starting with Joanie first',
        ],
        recommendedCoaches: 'Aimee, Emily, Victoria · Janet for senior/executive',
        sessionCount: '~6 sessions · 3 phases · Joanie in parallel',
        badgeColor: '#16163f',
        phases: [
            {
                id: 1,
                name: 'Target Setting',
                subtitle: 'Session 1 · Confirm direction',
                color: '#f26727',
                sessions: [
                    {
                        id: 1,
                        title: 'Career Review & Target Confirmation',
                        activities: [
                            'Walk your resume and career story together',
                            'Confirm target roles, industries & location preferences',
                            'Assess current materials and what needs updating',
                            'Set priorities and search strategy',
                            'Coach begins role research for next session',
                        ],
                        homework: 'Meet with Joanie to begin resume & cover letter development',
                    },
                ],
            },
            {
                id: 2,
                name: 'Guided Mapping',
                subtitle: 'Sessions 2–3 · Targeting & networking',
                color: '#54558e',
                sessions: [
                    {
                        id: 2,
                        title: 'Organization Research & LinkedIn',
                        activities: [
                            'Review coach-researched listings in your tracker together',
                            'Co-browse target companies, employee profiles & role postings',
                            'Confirm and prioritize your target organization list',
                            "Coach-led LinkedIn About section drafted with AI & Joanie's materials",
                            'Update LinkedIn Experience with your strongest resume highlights',
                        ],
                        homework: 'Post LinkedIn About section live; begin outreach to warm contacts',
                    },
                    {
                        id: 3,
                        title: 'Networking Prep & Application Launch',
                        activities: [
                            'Draft informational interview outreach messages in session',
                            'Build your networking target list in the tracker together',
                            'Review application materials; confirm readiness',
                            'Set application goals and weekly rhythm',
                        ],
                        homework: 'Send outreach messages already drafted; apply to 3–5 high-fit roles',
                    },
                ],
            },
            {
                id: 3,
                name: 'Search & Interview',
                subtitle: 'Sessions 4–6 · Show up with confidence',
                color: '#16163f',
                sessions: [
                    {
                        id: 4,
                        title: 'Interview Strategy & Story Frameworks',
                        activities: [
                            'Check in on applications & networking momentum',
                            "Build your 'Tell Me About Yourself' together",
                            'Introduce the C-C-A-R story framework',
                            'Practice your introduction out loud in session',
                        ],
                        homework: 'Practice intro with 2–3 people; draft two C-C-A-R stories',
                    },
                    {
                        id: 5,
                        title: 'Story Refinement & Role-Specific Questions',
                        activities: [
                            'Review and strengthen your C-C-A-R stories together',
                            'Practice role-specific and behavioral questions',
                            'Address challenging questions (gaps, weaknesses)',
                            'Develop strong questions to ask your interviewers',
                        ],
                        homework: 'Revise stories; draft additional responses; continue active applications',
                    },
                    {
                        id: 6,
                        title: 'Mock Interview & Final Preparation',
                        activities: [
                            'Full realistic mock interview using your target role',
                            'Structured debrief with specific, actionable feedback',
                            'Final confidence-building and mindset preparation',
                            'Leave ready to show up as your best self',
                        ],
                        homework: null,
                    },
                ],
            },
        ],
    },
];
export function getJourneyByKey(key) {
    if (!key)
        return undefined;
    return JOURNEYS.find((j) => j.key === key);
}
export function isJourneyKey(value) {
    return value === 'explorer' || value === 'pivot' || value === 'advancing';
}
