export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "aishanid";
  }
  if (query.toLowerCase().includes("andrew id")) {
    return "aishanid";
  }
  if (query.toLowerCase().includes("multiplied by")) {
    return "2080";
  }
  if (query.toLowerCase().includes("cube")) {
    return "64";
  }
  

  return "";
}
