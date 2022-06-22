/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Block } from 'payload/types';
import { Type as Page } from '../../collections/Page';
import RichText from '../../components/RichText';
import classes from './index.module.css';
import backgroundColor from '../../fields/backgroundColor';
import link, { LinkType } from '../../fields/link';

export type Action = {
  link: LinkType
}

export type Type = {
  blockType: 'cta'
  blockName?: string
  content: unknown
  action: Action[]
}

const CallToAction: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    backgroundColor,
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'action',
      type: 'array',
      label: 'Actions',
      minRows: 1,
      maxRows: 2,
      fields: [
        link
      ]
    }
  ],
};

export default CallToAction;