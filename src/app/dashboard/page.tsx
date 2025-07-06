import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import data from "../../data/data.json";
import { AppSidebar } from "@/components/shared/app-sidebar";
import { SiteHeader } from "@/components/shared/site-header";
import { SectionCards } from "@/components/shared/section-cards";
import { ChartAreaInteractive } from "@/components/shared/chart-area-interactive";
import { DataTable } from "@/components/shared/data-table";
import { RangeCalendar } from "@/components/shared/range-calendar";
import { CustomHeaderCalendar } from "@/components/shared/custom-header-calendar";
import { DateTimePicker } from "@/components/shared/date-time-picker";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <DataTable data={data} />
              <div className="p-4 lg:p-6 flex flex-col gap-6">
                <RangeCalendar />
                <CustomHeaderCalendar />
                <DateTimePicker />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
