import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import client from "apollo-client";
import Head from "next/head";

import { QUERY_CONFERENCE_WITH_ID } from "gql-requests";
import { ConferenceType, ContactType, LocationType } from "response-types";

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
  return (
    <>
      <Head>
        <title>{conference.name.toLocaleUpperCase()}</title>
        <meta name="description" content={conference.name} />
      </Head>
      <div>
        {conference.id}
        {conference.name}
      </div>
    </>
  );
};

export default Conference;
