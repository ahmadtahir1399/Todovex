"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Moon, Sun, LogOut, User, Settings } from "lucide-react";
import { useTheme } from "next-themes";

export default function UserProfile() {
  const { data: session } = useSession();
  console.log(session);
  const { theme, setTheme } = useTheme();

  const imageUrl = session?.user?.image;
  const name = session?.user?.name;
  const email = session?.user?.email;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 h-12 px-3 w-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              width={28}
              height={28}
              alt={`${name} profile picture`}
              className="rounded-full ring-2 ring-gray-200 dark:ring-gray-700"
            />
          ) : (
            <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <User size={16} className="text-gray-500 dark:text-gray-400" />
            </div>
          )}
          <div className="flex flex-col items-start flex-1 min-w-0">
            {name && (
              <p className="text-sm font-medium truncate dark:text-white">
                {name}
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
              {email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-64 p-2 dark:bg-gray-900 dark:border-gray-800">
        <DropdownMenuItem
          className="flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <Sun size={16} className="text-gray-500 dark:text-gray-400" />
          ) : (
            <Moon size={16} className="text-gray-500 dark:text-gray-400" />
          )}
          <span className="text-sm dark:text-white">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="my-2 dark:border-gray-800" />

        <DropdownMenuItem className="flex items-center gap-2 px-2 py-2 cursor-pointer text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
          <LogOut size={16} />
          <span className="text-sm">Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
