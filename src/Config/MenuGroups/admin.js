import React from 'react';
import TodayIcon from '@material-ui/icons/Today';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

const MENU_ADMIN = {
    name: 'Admin',
    items: [
        {
            name: 'Dictionaries',
            icon: <SettingsIcon />,
            items: [
                {
                    name: 'Accounts',
                    path: '/accounts',
                    perm: [
                        'admin.accounts.index',
                    ],
                },
                {
                    name: 'Creditors',
                    path: '/creditors',
                    perm: [
                        'admin.creditors.index',
                    ],
                },
                {
                    name: 'Email Templates',
                    path: '/emailtemplates',
                    perm: [
                        'admin.emailtemplates.index',
                    ],
                },
                {
                    name: 'Events',
                    path: '/events',
                    perm: [
                        'admin.events.index',
                    ],
                },
                {
                    name: 'Holidays',
                    path: '/holidays',
                    perm: [
                        'admin.holidays.index',
                    ],
                },
                {
                    name: 'Invoices',
                    path: '/invoices',
                    perm: [
                        'admin.invoices.index',
                    ],
                },
                
                {
                    name: 'Owners',
                    path: '/owners',
                    perm: [
                        'admin.owners.index',
                    ],
                },
                {
                    name: 'Products',
                    path: '/products',
                    perm: [
                        'admin.products.index',
                    ],
                },
                {
                    name: 'Properties',
                    path: '/properties',
                    perm: [
                        'admin.properties.index',
                    ],
                },
                {
                    name: 'Auto Charges',
                    path: '/autocharges',
                    perm: [
                        'admin.autocharges.index',
                    ],
                },
                {
                    name: 'Reminders',
                    path: '/reminders',
                    perm: [
                        'admin.reminders.index',
                    ],
                },
                {
                    name: 'Staff',
                    path: '/staff',
                    perm: [
                        'admin.staff.index',
                    ],
                },
                {
                    name: 'Transactions',
                    path: '/transactions',
                    perm: [
                        'admin.transactions.index',
                    ],
                },
                {
                    name: 'Users',
                    path: '/users',
                    perm: [
                        'admin.users.index',
                    ],
                },
                {
                    name: 'Groups',
                    path: '/groups',
                    perm: [
                        'admin.groups.index',
                    ],
                },
                {
                    name: 'Payment Methods',
                    path: '/paymentmethods',
                    perm: [
                        'admin.paymentmethods.index',
                    ],
                },
                {
                    name: 'Display Categories',
                    path: '/displaycategory',
                    perm: [
                        'admin.displaycategory.index',
                    ],
                },
                {
                    name: 'Vouchers',
                    path: '/vouchers/index',
                    perm: [
                        'admin.vouchers.index',
                    ],
                },
                {
                    name: 'VIP/Blacklist',
                    path: '/vipblacklists',
                    perm: [
                        'admin.vipblacklists.index',
                    ],
                },
                {
                    name: 'Observations',
                    path: '/observations',
                    perm: [
                        'admin.observations.index',
                    ],
                },
                {
                    name: 'Bedding Types',
                    path: '/beddingtypes',
                    perm: [
                        'admin.beddingtypes.index',
                    ],
                },
                {
                    name: 'Cache',
                    path: '/cache',
                    perm: [
                        'admin.cache.index',
                    ],
                },
            ],
        },
        {
            name: 'Month End',
            icon: <TodayIcon />,
            items: [
                {
                    name: 'Monthly payouts',
                    path: '/monthend/payouts',
                    perm: [
                        'admin.monthend.payouts'
                    ],
                },
                {
                    name: 'File covers',
                    path: '/monthend/covers',
                    perm: [
                        'admin.monthend.covers'
                    ],
                },
                {
                    name: 'Interconnect OI/CO',
                    path: '/xero/interconnect',
                    perm: [
                        'admin.xero.interconnect'
                    ],
                },
                {
                    name: 'Gen MS Invoice',
                    path: '/xero/genmsinvoice',
                    perm: [
                        'admin.xero.genmsinvoice'
                    ],
                },
                {
                    name: 'Allocate MS Invoices',
                    path: '/xero/allocmsinvoice',
                    perm: [
                        'admin.xero.allocmsinvoice'
                    ],
                },
            ],
        },
        {
            name: 'Xero',
            icon: <LocalAtmIcon />,
            items: [
                {
                    name: 'Bookings',
                    path: '/xero/bookings',
                    perm: [
                        'admin.xero.bookings'
                    ],
                },
                {
                    name: 'Invoices',
                    path: '/xero/invoices',
                    perm: [
                        'admin.xero.invoices'
                    ],
                },
                {
                    name: 'Troubleshooting',
                    path: '/xero/troubleshooting',
                    perm: [
                        'admin.xero.troubleshooting'
                    ],
                },
                {
                    name: 'Chrome Extension',
                    path: '/xero/chromeex',
                    perm: [
                        'admin.xero.chromeex'
                    ],
                },
                {
                    name: 'Products sync',
                    path: '/xero/products',
                    perm: [
                        'admin.xero.products'
                    ],
                },
            ],
        },
    ],
};

export default MENU_ADMIN;