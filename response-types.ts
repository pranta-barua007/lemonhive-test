export type ConferenceType = {
    id: string,
    name: string,
    slogan?: string
  }

type Image = {
    url?: string
}

export type ContactType = {
    name: string,
    about?: string,
    company?: string | null,
    image: Image
}

export interface LocationType extends ContactType {
    address?: string
}