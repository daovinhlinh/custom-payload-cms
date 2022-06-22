import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import Footer from './globals/Footer';
import NavbarMenu from './globals/NavbarMenu';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
  ],
  globals: [
    Footer,
    NavbarMenu
  ],

});
