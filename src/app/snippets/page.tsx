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
import { ButtonDemo } from "./_components/button";
import {
  CarouselDemo,
  CarouselOrientation,
  CarouselSize,
} from "./_components/carousel";
import { ChartDemo } from "./_components/chart";
import { CheckboxDemo } from "./_components/checkbox";
import { CollapsibleDemo } from "./_components/collapsible";
import { ComboboxDemo } from "./_components/combobox";
import { CommandDemo, CommandDialogDemo } from "./_components/command";
import { ContextMenuDemo } from "./_components/context-menu";
import { DataTable } from "@/components/shared/data-table";
import data from "../../data/data.json";
import { DialogDemo } from "./_components/dialog";
import { DrawerDemo } from "./_components/drawer";
import { FormDemo } from "./_components/form";
import { HoverCardDemo } from "./_components/hover-card";
import { InputOTPDemo } from "./_components/input-otp";
import { MenubarDemo } from "./_components/menubar";
import { NavigationMenuDemo } from "./_components/navigation-menu";
import { PopoverDemo } from "./_components/popover";
import { ProgressDemo } from "./_components/progress";
import { RadioGroupDemo } from "./_components/radio-group";
import { ResizableDemo, ResizableHandleDemo } from "./_components/resizable";
import {
  ScrollAreaDemo,
  ScrollAreaHorizontalDemo,
} from "./_components/scroll-area";
import { SheetDemo } from "./_components/sheet";
import { SkeletonCard, SkeletonDemo } from "./_components/skeleton";
import { SliderDemo } from "./_components/slider";
import { SonnerDemo } from "./_components/sonner";
import { SwitchDemo } from "./_components/switch";
import { TabsDemo } from "./_components/tabs";
import { TextareaDemo } from "./_components/textarea";
import { ToggleGroupDemo } from "./_components/toggle-group";
import { TooltipDemo } from "./_components/tooltip";

export default function SnippetsPage() {
  return (
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
          <div className="pb-4 font-bold">Button</div>
          <ButtonDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Calendar</div>
          <RangeCalendar />
          <CustomHeaderCalendar />
          <DateTimePicker />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Carousel</div>
          <div className="justify-center space-y-6">
            <div className="flex justify-center">
              <CarouselDemo />
            </div>
            <div className="flex justify-center">
              <CarouselSize />
            </div>
            <div className="flex justify-center p-16">
              <CarouselOrientation />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Chart</div>
          <ChartDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Checkbox</div>
          <CheckboxDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Collapsible</div>
          <CollapsibleDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Combobox</div>
          <ComboboxDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Command</div>
          <div className="space-y-4">
            <CommandDialogDemo />
            <CommandDemo />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Context Menu</div>
          <ContextMenuDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Data Table</div>
          <DataTable data={data} />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Dialog</div>
          <DialogDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Drawer</div>
          <DrawerDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">React Hook Form</div>
          <FormDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Hover Card</div>
          <HoverCardDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Input OTP</div>
          <InputOTPDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Menubar</div>
          <MenubarDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Navigation Menu</div>
          <NavigationMenuDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Popover</div>
          <PopoverDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Progress</div>
          <ProgressDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Radio Group</div>
          <RadioGroupDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Resizable</div>
          <div className="flex space-x-4">
            <ResizableDemo />
            <ResizableHandleDemo />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Scroll Area</div>
          <div className="flex space-x-4">
            <ScrollAreaDemo />
            <ScrollAreaHorizontalDemo />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Sheet</div>
          <SheetDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Skeleton</div>
          <div className="flex space-x-4">
            <SkeletonDemo />
            <SkeletonCard />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Slider</div>
          <SliderDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Sonner</div>
          <SonnerDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Switch</div>
          <SwitchDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Tabs</div>
          <TabsDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Textarea</div>
          <TextareaDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Toggle Group</div>
          <ToggleGroupDemo />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <div className="pb-4 font-bold">Tooltip</div>
          <TooltipDemo />
        </CardContent>
      </Card>
    </div>
  );
}
