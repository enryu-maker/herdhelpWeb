import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import FlatList from 'flatlist-react';
import Feedcard from '../../Screens/Finance/FinanceCard';
import AddFinance from '../../Screens/Finance/addFinance';
import TextButton from '../TextButton';
import { IMAGES } from '../../Theme/Image'; // Adjust path
import { COLORS, FONTS } from '../../Theme/Theme'; // Adjust path
import useMediaQuery from '../useMediaQuery';

// Ensure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export default function FinanceModal({ isOpen, onRequestClose }) {
    const finance = useSelector(state => state.Reducers.finance);
    const matches = useMediaQuery('(max-width:820px)');
    const mobile = useMediaQuery('(min-width:460px)');

    // State for the nested "Add Finance" logic (if we keep strict logic from LoadFinance)
    // LoadFinance logic had a mix of display:none/block and a separate Modal for adding.
    // Since we are now IN a modal, let's try to keep the structure clean but strict to logic.

    // Logic from LoadFinance for "Add Finance" visibility
    // It used `document.getElementById('Addfinance').style.display` in one branch
    // and a `Modal` in another (mobile).

    // Let's implement a simple toggle for "Add Finance" view within this modal 
    // to avoid nested Modals if possible, or just keep the nested structure if strict logic requires.
    // Given "strict order no changes in logic", I will try to replicate the 'Add Finance' behavior 
    // but contained within this modal. 

    const [showAddFinance, setShowAddFinance] = useState(false);

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1000,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                content: {
                    position: 'relative',
                    inset: 'auto',
                    width: '90%',
                    maxWidth: '1000px',
                    height: '85vh',
                    padding: '0',
                    border: 'none',
                    borderRadius: '12px',
                    backgroundColor: COLORS.white || '#fff',
                    overflow: 'hidden'
                }
            }}
        >
            <div className="flex flex-col h-full bg-gray-50">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100 bg-white">
                    <h2 className="text-2xl font-bold text-[#009A48]">Finance</h2>
                    <button
                        onClick={onRequestClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content Body */}
                <div className="flex-1 overflow-hidden flex flex-col md:flex-row">

                    {/* List Section */}
                    <div className="flex-1 overflow-y-auto p-6 order-2 md:order-1">
                        <div className="space-y-4">
                            <FlatList
                                list={finance}
                                keyExtractor={item => `${item.id}`}
                                renderItem={(item) => (
                                    <Feedcard
                                        key={item.id}
                                        Feedname={item.category}
                                        FeedQty={item.quantity}
                                        Feeddate={item.added_date}
                                        Feedprice={item.price}
                                    />
                                )}
                                renderWhenEmpty={() => (
                                    <div className="text-center text-gray-400 mt-10">
                                        No finance records found.
                                    </div>
                                )}
                            />
                        </div>
                    </div>

                    {/* Sidebar/Add Section (Desktop) */}
                    <div className="hidden md:block w-96 bg-white border-l border-gray-100 p-6 overflow-y-auto order-1 md:order-2">
                        <h3 className="text-lg font-bold text-gray-700 mb-4">Add Transaction</h3>
                        <AddFinance />
                    </div>
                </div>

                {/* Mobile Add Button (Floating) */}
                <div className="md:hidden absolute bottom-6 right-6">
                    <button
                        onClick={() => setShowAddFinance(!showAddFinance)}
                        className="bg-[#009A48] text-white p-4 rounded-full shadow-lg"
                    >
                        <img src={IMAGES.add} alt="add" className="w-6 h-6 brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                    </button>
                </div>

                {/* Mobile Add Form Overlay (if needed for strict mobile layout matching) */}
                {matches && showAddFinance && (
                    <div className="absolute inset-0 bg-white z-20 p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-gray-700">Add Transaction</h3>
                            <button onClick={() => setShowAddFinance(false)}>Close</button>
                        </div>
                        <AddFinance />
                    </div>
                )}
            </div>
        </Modal>
    );
}
