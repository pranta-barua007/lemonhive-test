import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import client from "apollo-client";
import Head from "next/head";

import { QUERY_CONFERENCE_WITH_ID } from "gql-requests";
import { ConferenceType, ContactType, LocationType } from "response-types";
import Navbar from "components/navbar/navbar.component";
import {
  ConferenceAbout,
  ConferenceContainer,
  ConferenceSection,
  ConferenceScrollableSection,
  ConferenceTitleInfo,
} from "styles/conference.styles";
import Button, { BUTTON_TYPE_CLASSES } from "ui/button/button.component";
import SectionCard from "components/section-card/section-card.component";
import { useState } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const confId = context.params?.confId;
  const { data } = await client.query({
    query: QUERY_CONFERENCE_WITH_ID,
    variables: { id: confId },
  });

  return {
    props: {
      conference: data.conference,
      organizers: data.conference.organizers,
      speakers: data.conference.speakers,
      locations: data.conference.locations,
      schedules: data.conference.schedules,
      sponsors: data.conference.sponsors,
    },
  };
};

interface ConferenceProps {
  conference: ConferenceType;
  organizers: [ContactType];
  speakers: [ContactType];
  locations: [LocationType];
  schedules: [ContactType];
  sponsors: [ContactType];
}

const Conference: NextPage<ConferenceProps> = ({
  conference,
  organizers = [],
  speakers = [],
  locations = [],
  schedules = [],
  sponsors = [],
}) => {
  const [filterQuery, setFilterQuery] = useState({id: 0, data: organizers});

  const filterOpts = [
    { id: 0, data: organizers, name: "organizers" },
    { id: 1, data: speakers, name: "speakers" },
    { id: 2, data: locations, name: "locations" },
    { id: 3, data: schedules, name: "schedules" },
    { id: 4, data: sponsors, name: "organizers" },
  ];

  return (
    <>
      <Head>
        <title>{conference.name.toLocaleUpperCase()}</title>
        <meta name="description" content={conference.slogan} />
      </Head>
      <Navbar />
      <ConferenceContainer>
        <ConferenceSection>
          <ConferenceTitleInfo>{conference.name}</ConferenceTitleInfo>
          <ConferenceAbout>{conference.slogan}</ConferenceAbout>
        </ConferenceSection>
        <ConferenceSection>
          {filterOpts.map((values, i) => (
            <Button
              key={i}
              buttonType={BUTTON_TYPE_CLASSES.squared}
              onClick={() => setFilterQuery({ id: values.id, data: values.data })}
              isActive={values.id === filterQuery.id}
            >
              {values.name}
            </Button>
          ))}
        </ConferenceSection>
        <ConferenceScrollableSection>
          {filterQuery.data.length > 0 ? (
            filterQuery.data.map((data, i) => (
              <SectionCard
                key={i}
                imgUrl={data.image?.url! || ""}
                title={data.name}
                company={data.company!}
                about={data.about!}
              />
            ))
          ) : (
            <p>No data</p>
          )}
        </ConferenceScrollableSection>
      </ConferenceContainer>
    </>
  );
};

export default Conference;
