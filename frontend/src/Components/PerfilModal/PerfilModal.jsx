import React, { useState } from 'react';
import './PerfilModal.css'; 
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ProfileIcon} from '../../Assets'

const ProfileModal = ({ isOpen, onClose, onLogout, anchorRef }) => {
    if (!isOpen) return null;

    const modalStyles = anchorRef?.current
    ? {
        position: 'absolute',
        top: 60,
        left: -230,
        background: 'white',
        padding: '20px',
        borderRadius: '12px',
        width: '250px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
    }
    : {};

    return (
        // <div className="profile-modal-overlay" onClick={onClose}>
            <div className="profile-modal-container" style={modalStyles}  onClick={(e) => e.stopPropagation()}>
            <ChevronUp 
                style={{ cursor: 'pointer', fontSize: '24px', color: '#333', position: 'absolute', top: '10px', right: '10px' }} 
                onClick={onClose}
            />
                <div className="profile-header">
                <img src={ProfileIcon} className='profile-picture' style={{maxWidth: '50px'}} width='20%' ></img>
                <div className="profile-info">
                    <h3>Juan Pérez</h3>
                    <h4>Desarrollo FullStack</h4>
                    <button className="view-profile-button">Ver Perfil</button>
                </div>
            </div>

            <div className="profile-manage-section">
                <h4>Gestionar Cuenta</h4>
                <ul className="profile-manage-list">
                    <li><a href="/settings">Ajustes y Privacidad</a></li>
                    <li><a href="/change-password">Cambiar Contraseña</a></li>
                    <li><button onClick={onLogout} className="logout-button">Salir</button></li>
                </ul>
                </div>
            </div>
        // </div>
    );
    };

    const PerfilModal = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const buttonRef = React.useRef(null);

    const handleOpenProfile = () => {
        setIsProfileOpen(true);
    };

    const handleCloseProfile = () => {
        setIsProfileOpen(false);
    };

    const handleLogout = () => {
        alert('Sesión cerrada');
        setIsProfileOpen(false);
    };

    return (
        <div style={{ position: 'relative' }}>
            <ChevronDown 
                onClick={handleOpenProfile} 
                ref={buttonRef} 
                style={{ cursor: 'pointer', fontSize: '24px', color: '#333' }} 
            />
            <ProfileModal 
                isOpen={isProfileOpen} 
                onClose={handleCloseProfile} 
                onLogout={handleLogout} 
                anchorRef={buttonRef}
            />
        </div>
    );
};

export default PerfilModal;