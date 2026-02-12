import { AboutFragment } from "@/types/data";
import { personalInfo, education, certifications, achievements } from "./personalInfo";

export const aboutData: AboutFragment = {
    _title: "About",
    bio: personalInfo.bio,
    aboutPhoto: {
        __typename: "BlockImage",
        url: personalInfo.profileImage,
        alt: personalInfo.name,
        width: 800,
        height: 1000,
    },
    clients: `
    <h3>Education</h3>
    <ul>
      ${education.map(edu => `
        <li>
          <strong>${edu.degree}</strong><br/>
          ${edu.school}, ${edu.period}
        </li>
      `).join('')}
    </ul>
  `,
    awards: `
    <h3>Certifications & Achievements</h3>
    <ul>
      ${certifications.map(cert => `<li>${cert.name} - ${cert.issuer}</li>`).join('')}
      ${achievements.map(ach => `<li>${ach.title} - ${ach.organization} (${ach.year})</li>`).join('')}
    </ul>
  `
};
