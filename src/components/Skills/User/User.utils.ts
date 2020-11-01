const SKILLS_MAX_VISIBLE = 3;

export const formSkillText = (skills: string[]) => {
  const visible = skills.slice(0, SKILLS_MAX_VISIBLE);
  let lastPart = '';
  const leftCount = skills.length - 3;

  if (leftCount > 0) {
    lastPart = `+${leftCount}`;
  }

  return `${visible.join(', ')} ${lastPart}`;
};
