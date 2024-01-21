import { Dot } from "lucide-react";
import { Link } from "@/components/LocaleNav";
import { LinkPill } from "@/components/ui/LinkPill";
import { Fragment } from "react";

export function Resume() {
  return (
    <div>
      <header className="hidden print:block print:mb-2">
        <h2 className="flex">
          <span className="font-bold">Alan Gou</span>{" "}
          <span className="mx-2">/</span> work
        </h2>
      </header>
      <main>
        <section className="mb-3 print:mb-2">
          <p className="text-2xl font-semibold max-w-sm font-serif">
            Engineer, writer, and twice a VC-backed founder.
          </p>
        </section>
        <section className="sm:pl-12 sm:pr-16 mb-2 print:text-sm print:mb-2">
          <p>
            Currently on sabbatical, taking{" "}
            <Link href="/physics/18.01sc/pset1">physics</Link> classes back at
            Columbia,
          </p>
        </section>
        <section className="sm:pl-12 sm:pr-16 space-y-2 print:text-sm print:space-y-2">
          <p>
            Previously cofounded Revv, raising $5.5 million to build a crypto
            options exchange, and in college cofounded Palette, an
            experimentation platform.
          </p>
          <p>
            Began my career in SF, where I immersed myself in startups and
            learned how growth, sales, and product teams work.
          </p>
        </section>
        <section className="mt-8 print:mt-3">
          <h3 className="text-xl font-bold underline-offset-4 mb-2 print:mb-1 font-serif">
            Experiences
          </h3>
          <div className="space-y-4 print:space-y-2">
            {Experiences.map((experience) => {
              return (
                <div key={experience.company}>
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-x-1 text-base">
                      <h4>
                        <LinkPill href={experience.companyLink}>
                          {experience.company}
                        </LinkPill>
                      </h4>
                      —<p>{experience.position}</p>
                    </div>
                    <p>
                      {experience.dates.map((date, index) => {
                        let space = "";
                        if (index !== experience.dates.length - 1) {
                          space = " — ";
                        }

                        return (
                          <Fragment key={index}>
                            <span
                              className="text-sm"
                              key={index}
                            >{`${date.month} ${date.year}`}</span>
                            {space}
                          </Fragment>
                        );
                      })}
                    </p>
                  </div>
                  <div className="print:text-sm">{experience.content}</div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="mt-8 print:mt-4">
          <h2 className="text-xl font-bold underline-offset-4 mb-2 print:mb-1 font-serif">
            Education
          </h2>
          <div className="flex items-center justify-between">
            <p className="">Columbia University — 2017</p>
          </div>
          <Subheading>B.S. in Computer Science</Subheading>
        </section>
      </main>
    </div>
  );
}

function List(props: { children: React.ReactNode }) {
  return (
    <ul className="space-y-1 list-disc list-inside text-[15px] print:text-sm">
      {props.children}
    </ul>
  );
}

function ListItem(props: { children: React.ReactNode }) {
  return (
    <li className="flex">
      <div>
        <Dot />
      </div>
      <div>{props.children}</div>
    </li>
  );
}

function Subheading(props: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-[15px] print:text-sm italic text-gray-800 dark:text-gray-100/80">
      {props.children}
    </p>
  );
}

const Experiences = [
  {
    company: "Revv",
    companyLink: "https://revv.xyz",
    position: "Cofounder/COO",
    dates: [
      {
        month: "January",
        year: 2022,
      },
      {
        month: "March",
        year: 2023,
      },
    ],
    content: (
      <div>
        <Subheading>
          Responsible for web/mobile part of our stack and our regulatory and
          compliance strategy.
        </Subheading>
        <List>
          <ListItem>
            We built{" "}
            <LinkPill href="https://www.strike.trade/">Strike</LinkPill>, a
            non-custodial RFQ-based options exchange on Solana. Docs still{" "}
            <LinkPill href="https://docs.strike.trade/docs/introduction">
              here
            </LinkPill>
            .
          </ListItem>
          <ListItem>
            Built the web app real-time RFQ flow, trade volume metrics, and
            market maker portal, and created internal tooling to manage our
            Rust/TypeScript monorepo.
          </ListItem>

          <ListItem>
            Built Revv and Strike{"'"}s landing and blog pages. Cowrote our
            content pieces on the options industry, the{" "}
            <LinkPill href="https://web.archive.org/web/20221202025956/https://revv.xyz/ideas/defi-options-mapping-hype-to-reality">
              second
            </LinkPill>{" "}
            of which generated over a hundred thousand views on Twitter.
          </ListItem>
        </List>
      </div>
    ),
  },
  {
    company: "Kojo",
    companyLink: "https://usekojo.com",
    position: "Platform Engineer",
    dates: [
      {
        month: "August",
        year: 2020,
      },
      {
        month: "February",
        year: 2022,
      },
    ],
    content: (
      <div>
        <Subheading>
          Platform team, which handled infra, external platform, and customer
          integrations
        </Subheading>
        <List>
          <ListItem>
            Helped build our customer-facing API platform in REST and GraphQL.
            Designed and built ComputerEase ERP integration, reducing
            procurement entry times between 50-80%. Built out async job service,
            revamped user auth across mobile and web
          </ListItem>
        </List>
      </div>
    ),
  },
  {
    company: "Front",
    companyLink: "https://front.com",
    position: "Growth Engineer",
    dates: [
      {
        month: "July",
        year: 2019,
      },
      {
        month: "August",
        year: 2020,
      },
    ],
    content: (
      <div>
        <Subheading>
          Growth team, learning how a fast-growing startup acquires users at
          scale
        </Subheading>
        <List>
          <ListItem>
            Focused on improving conversion at every part of the sales funnel,
            from landing page to sign-up to demo to paid. Worked on trial
            experience, onboarding, in-app demoing, sign-up flow, import and
            sync tools, and more.
          </ListItem>
        </List>
      </div>
    ),
  },
  {
    company: "Affirm",
    companyLink: "https://affirm.com",
    position: "Software Engineer",
    dates: [
      {
        month: "July",
        year: 2018,
      },
      {
        month: "July",
        year: 2019,
      },
    ],
    content: (
      <div>
        <Subheading>Merchant team, our B2B and integrations arm</Subheading>
        <List>
          <ListItem>
            Built credit waterfall exchange, which served over 20% of Affirm
            {"'"}s underwriting flows, and worked on core checkout and
            experiments platform.
          </ListItem>
        </List>
      </div>
    ),
  },
];
