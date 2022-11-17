import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  
    {
        id: 2,
        label: 'Dashboard',
        icon: 'uil-home-alt',
        link: '/dashboard',
    },
    {
        id: 3,
        label: 'Sales',
        icon: 'uil-bullseye',
        subItems: [
            {
                id: 4,
                label: 'Client Details',
                link: 'form/clientdetailslist',
                parentId: 3
            },
            {
                id: 5,
                label: 'Channel Partner',
                link: 'form/channelpartnerslist',
                parentId: 3
            },
            {
                id: 6,
                label: 'Sales Details',
                link: 'form/salesdetailslist',
                parentId: 3
            },
           

            {
                id: 41,
                label: 'Employee Performance',
                link: 'form/dealdetailslist',
                parentId: 3
            },
            {
                id: 42,
                label: 'Walkin Deals',
                link: 'form/walkindeals',
                parentId: 3
            },
            {
                id: 43,
                label: 'Walkin Deals List',
                link: 'form/walkindealslist',
                parentId: 3
            }
        ]
    },
    {
        id: 8,
        label: 'Invoices',
        icon: 'uil-invoice',
        subItems: [
            // {
            //     id: 9,
            //     label: 'Invoice Details',
            //     link: 'form/invoices/invoice/invoicedetailslist',
            //     parentId: 8
            // },


            {
                id: 10,
                label: 'Receipt Details',
                link: 'form/invoices/receiptdetails/receiptdetailslist',
                parentId: 8
            },
            {
                id: 11,
                label: 'Credit Note',
                link: 'form/invoices/creditnote/creditnotelist',
                parentId: 8
            },
            {
                id: 12,
                label: 'GST Filling Details',
                link: 'form/invoices/gstfillingdetails/gstfillingdetailslist',
                parentId: 8
            },
            {
                id: 40,
                label: 'B2B Invoice',
                link: 'form/b2binvoices',
                parentId: 8
            },
            {
                id: 41,
                label: 'Invoice With Multiple Clients',
                link: 'form/invoices/invoice/invoicemultipledetailslist',
                parentId: 8
            },
        ]
    },
    {
        id: 13,
        label: 'Salary',
        icon: 'uil-money-bill',
        subItems: [
                // {
                //     id: 14,
                //     label: 'Salary Package',
                //     link: 'form/salary/salarypackagelist',
                //     parentId: 13
                // },
            // {
            //     id: 15,
            //     label: 'Monthly Salary',
            //     link: 'form/salary/monthly-salary-list',
            //     parentId: 13
            // },
            // {
            //     id: 16,
            //     label: 'Monthly Target',
            //     link: 'form/salary/monthly-target-list',
            //     parentId: 13
            // },
            {
                id: 17,
                label: 'Advanced Salary',
                link: 'form/salary/advancesalarylist',
                parentId: 13
            },
            {
                id: 18,
                label: 'Advanced EMI Details',
                link: 'form/salary/advance-emi-list',
                parentId: 13
            },
            {
                id: 19,
                label: 'Monthly Salary',
                link: 'form/salary/monthlysalary1',
                parentId: 13
            },
        ]
    },
    {
        id: 19,
        label: 'Settings',
        icon: 'uil-setting',
        subItems: [
            {
                id: 20,
                label: 'Users',
                link: 'form/users',
                parentId: 19
            },
            {
                id: 21,
                label: 'Teams',
                //link: '/form/teamslist',
                    subItems: [
                                {
                                    id: 30,
                                    label: 'Team Lists',
                                    link: 'form/teamslist',
                                    parentId: 21
                                },
                                {
                                    id: 31,
                                    label: 'Team Leaders List',
                                    link: 'form/teamleaderslist',
                                    parentId: 21
                                },
                                {
                                    id: 32,
                                    label: 'Teams Details',
                                    link: 'form/teamdetailslist',
                                    parentId: 21
                                },
                              ]
            },
            {
                id: 22,
                label: 'Company',
                link: 'form/companylist',
                parentId: 19
            },
            {
                id: 23,
                label: 'Projects',
                link: 'form/projectslist',
                parentId: 19
            },
            {
                id: 24,
                label: 'Subprojects',
                link: 'form/subprojectslist',
                parentId: 19
            },
            {
                id: 25,
                label: 'Regions',
                link: 'form/regionslist',
                parentId: 19
            },
            {
                id: 26,
                label: 'Subregions',
                link: 'form/subregionslist',
                parentId: 19
            },
            {
                 id: 27,
                 label: 'Designations',
                 link: 'form/designationslist',
                 parentId: 19
            },
            {
                id: 14,
                label: 'Salary Package',
                link: 'form/salarypackagelist',
                parentId: 13
            },
            {
                id: 28,
                label: 'Project Allocations',
                link: 'form/projectallocationslist',
                parentId: 19
           },
            {
                 id: 29,
                 label: 'Create Permissions',
                 link: 'form/permissions',
                 parentId: 19
            },

        ]
    },
    {
        id: 33,
        label: 'Reports',
        icon: 'uil-file-alt',
        link: '/reports',
    },
    {
        id: 34,
        label: 'Accounts',
        icon: 'uil-bullseye',
        subItems: [
          
            {
                id: 37,
                label: 'GSTR 1',
                link: 'form/gstdetailslist',
                parentId: 34
            },
            {
                id: 38,
                label: 'GSTR 3B',
                link: 'form/gstr3BDetails',
                parentId: 34
            },

            {
                id: 39,
                label: 'GSTR 2A',
                link: 'form/gstr2a',
                parentId: 34
            },
           
        ]
    },

    {
        id: 40,
        label: 'Attendance',
        icon: 'uil-file-alt',
        link: 'form/attendence',
    },
  
    {
        id: 40,
        label: 'Incentive Details',
        icon: 'uil-file-alt',
        subItems: [
            {
                id: 41,
                label: 'Monthly Incentive',
                icon: 'uil-file-alt',
                link: 'form/incentivedetails',
                parentId: 40
            },
            {
                id: 42,
                label: 'Quarterly Incentive',
                link: 'form/quarterlyincentive',
                parentId: 40
            },
            {
                id: 43,
                label: 'Half Year Incentive',
                link: 'form/halfyearincentive',
                parentId: 40
            },
            {
                id: 44,
                label: 'Year Incentive',
                link: 'form/yearincentive',
                parentId: 40
            },
           
        ]

    }
    
];

