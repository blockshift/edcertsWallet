const d = new Date();
const month1 = d.getMonth() + 1 > 11 ? (d.getMonth() + 1 - 12 ) : d.getMonth() + 1;
const month2 = d.getMonth() + 2 > 11 ? (d.getMonth() + 2 - 12 ) : d.getMonth() + 2;
const month3 = d.getMonth() + 3 > 11 ? (d.getMonth() + 3 - 12 ) : d.getMonth() + 3;
const month4 = d.getMonth() + 4 > 11 ? (d.getMonth() + 4 - 12 ) : d.getMonth() + 4;
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export let dashboardData: any = {
    emailsSent: [{
        'name': 'Opened',
        'value': 70,
    }],
    incomingDeals: {
        options: {
            showXAxis: true,
            showYAxis: true,
            gradient: false,
            showLegend: false,
            showXAxisLabel: true,
            xAxisLabel: ''
        },
        colorSchema: {
            domain: ['#673AB7', '#1E88E5', '#7CB342', '#FFC107']
        },
        data: [
            {
                'name': monthNames[month1],
                'series': [
                    {
                        'value': 2469,
                        'name': 'Unknown',
                    },
                    {
                        'value': 3619,
                        'name': 'Website',
                    },
                    {
                        'value': 3885,
                        'name': 'Ads',
                    },
                    {
                        'value': 4289,
                        'name': 'Referrals',
                    },
                ],
            },
            {
                'name': monthNames[month2],
                'series': [
                    {
                        'value': 2452,
                        'name': 'Unknown',
                    },
                    {
                        'value': 4938,
                        'name': 'Website',
                    },
                    {
                        'value': 4110,
                        'name': 'Ads',
                    },
                    {
                        'value': 3828,
                        'name': 'Referrals',
                    },
                ],
            },
            {
                'name': monthNames[month3],
                'series': [
                    {
                        'value': 4022,
                        'name': 'Unknown',
                    },
                    {
                        'value': 2345,
                        'name': 'Website',
                    },
                    {
                        'value': 5148,
                        'name': 'Ads',
                    },
                    {
                        'value': 6868,
                        'name': 'Referrals',
                    },
                ],
            },
            {
                'name': monthNames[month4],
                'series': [
                    {
                        'value': 6194,
                        'name': 'Unknown',
                    },
                    {
                        'value': 6585,
                        'name': 'Website',
                    },
                    {
                        'value': 6857,
                        'name': 'Ads',
                    },
                    {
                        'value': 2545,
                        'name': 'Referrals',
                    },
                ],
            },

        ],
    },
    dealsLostByReason: {
        colorSchema: {
            domain: ['#FFEBEE', '#EF9A9A', '#EF5350', '#E53935']
        },
        data: [
            {
                'name': 'Databases',
                'value': 64,
            },
            {
                'name': 'Containers',
                'value': 122,
            },
            {
                'name': 'Streams',
                'value': 122,
            },
            {
                'name': 'Queries',
                'value': 33,
            },
        ]
    },
    referralUrl: {
        data: [
            {
                'name': 'Google',
                'value': 4200,
            },
            {
                'name': 'Facebook',
                'value': 2578,
            },
            {
                'name': 'Linkedin',
                'value': 1881,
            },
            {
                'name': 'Twitter',
                'value': 1400,
            },
            {
                'name': 'Instagram',
                'value': 1104,
            },
            {
                'name': 't2.agency',
                'value': 808,
            },
        ]
    },
    campaigns: {
        colorSchema: {
            domain: ['#66BB6A', '#29B6F6', '#EF5350']
        },
        data: [
            {
                'name': 'Complete',
                'value': 9,
            },
            {
                'name': 'Active',
                'value': 5,
            },
            {
                'name': 'Removed',
                'value': 2,
            },
        ]
    },
    contacts: {
        data: [
            {
                'name': 'Andrea Jenkins',
                'email': 'andrea.jenkins60@example.com',
                'img': 'https://randomuser.me/api/portraits/women/76.jpg'
            },
            {
                'name': 'Ross Mccoy',
                'email': 'ross.mccoy25@example.com',
                'img': 'https://randomuser.me/api/portraits/men/62.jpg'
            },
            {
                'name': 'Tracey Nelson',
                'email': 'tracey.nelson32@example.com',
                'img': ''
            },
            {
                'name': 'Cindy Ruiz',
                'email': 'cindy.ruiz46@example.com',
                'img': 'https://randomuser.me/api/portraits/women/9.jpg'
            },
            {
                'name': 'Billy Parker',
                'email': 'billy.parker54@example.com',
                'img': ''
            },
            {
                'name': 'Kurt Sanchez',
                'email': 'kurt.sanchez32@example.com',
                'img': 'https://randomuser.me/api/portraits/men/97.jpg'
            },
            {
                'name': 'Glenda Thompson',
                'email': 'glenda.thompson88@example.com',
                'img': 'https://randomuser.me/api/portraits/women/10.jpg'
            },
            {
                'name': 'Debbie Burns',
                'email': 'debbie.burns89@example.com',
                'img': ''
            },
        ]
    },
    deals: {
        data: [
            {
                name: 'Deal name goes here',
                date: '2 mins ago',
                contacts: [3, 5]
            },
            {
                name: 'Deal name goes here',
                date: '8 hours ago',
                contacts: [1, 3, 7]
            },
            {
                name: 'Deal name goes here',
                date: '1 day ago',
                contacts: [2]
            },
            {
                name: 'Deal name goes here',
                date: '2 days ago',
                contacts: [4, 5]
            },
            {
                name: 'Deal name goes here',
                date: '2 days ago',
                contacts: [6, 2]
            },
            {
                name: 'Deal name goes here',
                date: '4 days ago',
                contacts: [7, 3, 5, 2]
            },
            {
                name: 'Deal name goes here',
                date: '5 days ago',
                contacts: [4]
            },
            {
                name: 'Deal name goes here',
                date: '1 week ago',
                contacts: [3]
            },
            {
                name: 'Deal name goes here',
                date: 'last month',
                contacts: [2]
            },
            {
                name: 'Deal name goes here',
                date: 'last month',
                contacts: [6]
            },
        ]
    }
};