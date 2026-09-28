import React from 'react';
import { useDC } from '../../dc/runtime.js';
import { usePhone } from '../../useMedia.js';
import DeskLogic, { defaults as dd } from './LicensingDesktopLogic.js';
import PhoneLogic, { defaults as pd } from './LicensingPhoneLogic.js';
import DeskView from './LicensingDesktopView.jsx';
import PhoneView from './LicensingPhoneView.jsx';

function Desk() { return <DeskView v={useDC(DeskLogic, dd)} />; }
function Phone() { return <PhoneView v={useDC(PhoneLogic, pd)} />; }

export default function LicensingPage() {
  return usePhone() ? <Phone /> : <Desk />;
}
