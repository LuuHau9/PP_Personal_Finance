import { Button } from "@/components/core/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/core/card";
import { Progress } from "@/components/core/progress";
import { PotTheme, THEME_CLASSES } from "@/constants/enums";
import { Ellipsis, Plus } from "lucide-react";
import { useMemo } from "react";

export interface PotCard {
  name: string;
  theme: PotTheme;
  totalSave: number;
  target: number;
}

export const PotCard = ({ name, target, totalSave, theme }: PotCard) => {
  const targetDisplay = `Target of $${target}`;
  const currentPercentage = useMemo(
    () => (totalSave / target) * 100,
    [target, totalSave],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-4">
          <div className={`rounded-full w-4 h-4 ${THEME_CLASSES[theme]}`} />
          <h2 className="text-present-2">{name}</h2>
        </CardTitle>
        <CardAction>
          <Button size="icon-sm" variant={"ghost"}>
            <Ellipsis />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-between items-center">
          <p className="text-present-4">Total Saved</p>
          <p className="text-present-1">{`$${totalSave}`}</p>
        </div>
        <Progress
          value={50}
          className="mt-4 mb-3"
          indicatorClassName={`${THEME_CLASSES[theme]}`}
        />
        <div className="flex justify-between">
          <p className="text-present-5-bold">{`${currentPercentage}%`}</p>
          <p className="text-present-5">{targetDisplay}</p>
        </div>
      </CardContent>
      <CardFooter className="gap-2 justify-between flex-1">
        <Button variant={"outline"} size={"lg"} className="grow ">
          <Plus className="w-1" />
          Add Money
        </Button>
        <Button variant="outline" size={"lg"} className="grow">
          Withdraw
        </Button>
      </CardFooter>
    </Card>
  );
};
