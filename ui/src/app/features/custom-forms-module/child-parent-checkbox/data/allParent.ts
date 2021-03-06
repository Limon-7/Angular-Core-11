export const allParentChildData = [
    {
        ID: 138,
        TASK_NAME: "Change Password",
        TEXT: "Change Password",
        URL: "~/Pages/User/ChangePassword.aspx",
        PARENTID: 0,
        CREATE_BY: null,
        CREATE_DATE: "2016-04-10T00:00:00",
        FOR_ALL: null,
        ORDER_COL: 1,
        ICON: "fa fa-key",
        UPDATE_BY: null,
        UPDATE_DATE: null,
        PARENT_CLASS: null,
        HASCHILD: 0
    },
    {
        ID: 121,
        TASK_NAME: "Report",
        TEXT: "Report",
        URL: null,
        PARENTID: 0,
        CREATE_BY: null,
        CREATE_DATE: "2016-03-12T15:28:30",
        FOR_ALL: null,
        ORDER_COL: 2,
        ICON: "fa-th-list",
        UPDATE_BY: null,
        UPDATE_DATE: null,
        PARENT_CLASS: "accordion",
        HASCHILD: 1,
        "childTask": [
            {
                ID: 135,
                TASK_NAME: "Certificate",
                TEXT: "Certificate",
                URL: "~/Report/Viewer/Certificate.aspx",
                PARENTID: 121,
                CREATE_BY: null,
                CREATE_DATE: "2016-03-12T15:28:30",
                FOR_ALL: null,
                ORDER_COL: 4,
                ICON: "fa-certificate",
                UPDATE_BY: "sa",
                UPDATE_DATE: "2016-06-07T10:54:50",
                PARENT_CLASS: null,
                HASCHILD: 0
            },
            {
                ID: 136,
                TASK_NAME: "Bill",
                TEXT: "Bill",
                URL: "~/Report/Viewer/Bill.aspx",
                PARENTID: 121,
                CREATE_BY: null,
                CREATE_DATE: "2016-03-12T15:28:30",
                FOR_ALL: null,
                ORDER_COL: 1,
                ICON: "fa-money",
                UPDATE_BY: "sa",
                UPDATE_DATE: "2016-06-07T10:58:24",
                PARENT_CLASS: null,
                HASCHILD: 0
            },
            {
                ID: 137,
                TASK_NAME: "Customer Ledger",
                TEXT: "Customer Ledger",
                URL: "~/Report/Viewer/Ledger.aspx",
                PARENTID: 121,
                CREATE_BY: null,
                CREATE_DATE: "2016-03-12T15:28:30",
                FOR_ALL: null,
                ORDER_COL: 2,
                ICON: "fa-list-alt",
                UPDATE_BY: "sa",
                UPDATE_DATE: "2020-01-05T22:43:58",
                PARENT_CLASS: null,
                HASCHILD: 0
            },
            {
                ID: 381,
                TASK_NAME: "Utility Bill Ledger",
                TEXT: "Utility Bill Ledger",
                URL: "http://180.211.137.21:8080/apex/f?p=2016:35:15992644288626::NO:",
                PARENTID: 121,
                CREATE_BY: "sa",
                CREATE_DATE: "2020-01-05T22:42:53",
                FOR_ALL: null,
                ORDER_COL: 3,
                ICON: "fa-th-list",
                UPDATE_BY: null,
                UPDATE_DATE: null,
                PARENT_CLASS: null,
                HASCHILD: 0
            }
        ]
    },

    {
        ID: 131,
        TASK_NAME: "User Management",
        TEXT: "User Management",
        URL: null,
        PARENTID: 0,
        CREATE_BY: null,
        CREATE_DATE: "2016-03-12T15:34:12",
        FOR_ALL: null,
        ORDER_COL: null,
        ICON: "fa-users",
        UPDATE_BY: null,
        UPDATE_DATE: null,
        PARENT_CLASS: "accordion",
        HASCHILD: 1,
        "childTask": [
            {
                ID: 165,
                TASK_NAME: "New User",
                TEXT: "New User",
                URL: "~/Pages/RoleManagement/DBBasedUser.aspx",
                PARENTID: 131,
                CREATE_BY: "sa",
                CREATE_DATE: "2018-06-15T04:44:17",
                FOR_ALL: null,
                ORDER_COL: null,
                ICON: "fa-users",
                UPDATE_BY: null,
                UPDATE_DATE: null,
                PARENT_CLASS: "accordion",
                HASCHILD: 0
            },
            {
                ID: 132,
                TASK_NAME: "Role Setup",
                TEXT: "Role Setup",
                URL: "~/Pages/RoleManagement/RoleSetup.aspx",
                PARENTID: 131,
                CREATE_BY: null,
                CREATE_DATE: "2016-03-12T15:34:50",
                FOR_ALL: null,
                ORDER_COL: null,
                ICON: "fa-user-md",
                UPDATE_BY: null,
                UPDATE_DATE: null,
                PARENT_CLASS: null,
                HASCHILD: 0
            },
            {
                ID: 133,
                TASK_NAME: "Task Manager",
                TEXT: "Task Manager",
                URL: "~/Pages/RoleManagement/TaskManager.aspx",
                PARENTID: 131,
                CREATE_BY: null,
                CREATE_DATE: "2016-03-12T15:35:17",
                FOR_ALL: null,
                ORDER_COL: null,
                ICON: "fa-tasks",
                UPDATE_BY: null,
                UPDATE_DATE: null,
                PARENT_CLASS: null,
                HASCHILD: 0
            }
        ]
    }
]