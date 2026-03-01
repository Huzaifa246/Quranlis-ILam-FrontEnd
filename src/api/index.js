import axios from 'axios';

const API_BASE = 'http://localhost:5000/api'; // Change if backend runs elsewhere

export const getQuran = (lines = '16-lines') => axios.get(`${API_BASE}/quran`, { params: { lines } });
export const getQuranAudio = (surah, ayah) => axios.get(`${API_BASE}/quranAudio`, { params: { surah, ayah } });
export const getPrayerTimes = () => axios.get(`${API_BASE}/prayer`);
export const getRamadanInfo = () => axios.get(`${API_BASE}/ramadan`);
export const calculateZakat = (data) => axios.post(`${API_BASE}/zakat/calculate`, data);
export const chatMessage = (message) => axios.post(`${API_BASE}/chat`, { message });
