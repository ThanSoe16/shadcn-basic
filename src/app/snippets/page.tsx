import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/shared/app-sidebar";
import { SiteHeader } from "@/components/shared/site-header";
import { RangeCalendar } from "@/components/shared/range-calendar";
import { CustomHeaderCalendar } from "@/components/shared/custom-header-calendar";
import { DateTimePicker } from "@/components/shared/date-time-picker";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlertDialogDemo } from "./_components/alert-dialog";
import { AlertDemo } from "./_components/alert";
import { AspectRatioDemo } from "./_components/aspect-ratio";
import { AvatarDemo } from "./_components/avatar";
import { BadgeDemo } from "./_components/badge";
import { BreadcrumbDemo } from "./_components/bread-crumb";

export default function SnippetsPage() {
  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="p-4 lg:p-6 flex flex-col gap-6">
          <Card>
            <CardContent>
              <div className="pb-4 font-bold">Accordion</div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="pb-4 font-bold">Alert</div>
              <AlertDemo />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="pb-4 font-bold">Alert Dialog</div>
              <AlertDialogDemo />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="pb-4 font-bold">Aspect Ratio</div>
              <AspectRatioDemo />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="pb-4 font-bold">Avatar</div>
              <AvatarDemo />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="pb-4 font-bold">Badge</div>
              <BadgeDemo />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="pb-4 font-bold">Bread Crumb</div>
              <BreadcrumbDemo />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <div className="pb-4 font-bold">Date Picker</div>
              <RangeCalendar />
              <CustomHeaderCalendar />
              <DateTimePicker />
            </CardContent>
          </Card>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
