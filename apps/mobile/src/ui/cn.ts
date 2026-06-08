// className birikmasi uchun yengil yordamchi (clsx + tailwind-merge ga muhtoj emas)
export function cn(...inputs: Array<string | undefined | null | false>): string {
  return inputs.filter(Boolean).join(' ');
}
