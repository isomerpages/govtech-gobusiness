const customTables = [
  {
    path: "/start-a-business/open-a-corporate-bank-account-a/",
    columns: ["32%", "auto"],
  },
  {
    path: "/contact-us/",
    columns: ["32%", "auto"],
  }, 
  {
    path: "/start-a-business/open-a-corporate-bank-account-b/",
    columns: ["32%", "auto"],
  },
  {
    path: "/timelimitedrrt/",
    columns: ["32%", "auto"],
  },
  {
    path: "/covid-faqs/workplace-safe-management-measures",
    columns: ["32%", "auto"],
  },
  {
    path: "/licences/find-licence-by-agency/",
    columns: ["auto", "200px"],
  },
  {
    path: "/licensing-faqs/food-shop-licence/",
    columns: ["12%", "70%", "auto"],
  },
  {
    path: "/licensing-faqs/food-stall-licence/",
    columns: ["12%", "70%", "auto"],
  },
  {
    path: "/productivity-solutions-grant/",
    columns: ["20%", "auto"]
  },
  {
    path: "/licences/renew-amend-licence/",
    columns: ["68%", "32%"]
  },
  {
    path: "/productivity-solutions-grant/solutionrepo/",
    columns: ["10%", "auto", "22%", "22%", "22%"]
  },
];

$(document).ready(function () {
  const path = $(location).attr("pathname");
  const { columns } = customTables.find(ct => ct.path === path);
  columns.forEach((c, i) => {
    $("table>thead>tr>th:nth-child(" + (i + 1)).css("width", c);
    $("table>tbody>tr>td:nth-child(" + (i + 1)).css("width", c);
  });
});
