/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

module.exports = {
  'Notification Management': 'Gestión de notificaciones',
  'Server Settings': 'Configuración del servidor',
  'Receiver Settings': 'Configuración del receptor',
  'Receive Notification': 'Recibir notificación',

  Mail: 'Correo',
  'SMTP Server Address': 'Dirección del servidor SMTP',
  'Use SSL Secure Connection': 'Usar conexión segura SSL',

  MAIL_DESC:
    'Puede recibir notificaciones de la plataforma por correo y debe configurar el servidor de envío de correo.',
  SENDER_MAIL: 'Correo del remitente',
  MAIL_SETTINGS_CHANGE_NEED_SAVE_TIP:
    'Su configuración de correo actual ha cambiado, guarde la configuración o cancele la modificación',

  'Please enter the SMTP username': 'Por favor ingrese el usuario SMTP',
  'Please enter an email address': 'Ingrese un correo electrónico para agregar',
  'This email address has existed': 'Este correo electrónico ha existido',
  'Invalid email': 'Email inválido',
  '50 email addresses at most': 'Agregar hasta 50 correos',
  'Please add the receiver email address':
    'Por favor, agregue el correo electrónico del destinatario',

  DingTalk: 'DingTalk',
  'Conversation Settings': 'Configuración de conversación',
  'Conversation ID': 'ID de conversación',
  'DingTalk Chatbot': 'Chatbot de DingTalk',
  'Webhook URL': 'URL del webhook',
  keywords: 'palabras clave',
  'Keywords Set': 'Conjunto de palabras clave',

  'Please enter a conversation ID':
    'Ingrese un ID de conversación para agregar',
  'Please enter a keyword': 'Ingrese una palabra clave para agregar',
  'This conversation ID has existed': 'Este ID de conversación ha existido',
  'This keyword has existed': 'Esta palabra clave ha existido',

  DINGTALK_DESC:
    'Puede recibir notificaciones de la plataforma a través de Dingding y debe configurar el servidor de envío de Dingding.',
  DINGTALK_KEYWORDS_DESC:
    'Palabras clave personalizadas de ChatBot, si necesita más de una, sepárelas con "," ',
  DINGTALK_SETTINGS_CHANGE_NEED_SAVE_TIP:
    'Su configuración actual de Dingding ha sido cambiada, guarde la configuración o cancele la modificación',

  WeCom: 'WeCom',
  'WeChat API Corp ID': 'ID de Wechat Api Corp',
  'WeChat API Agent ID': 'ID de agente de Wechat Api',
  'WeChat API Secret': 'El secreto de Wechat Api',
  Department: 'Departamento',
  'User Set': 'Conjunto de usuario',
  'Department Set': 'Conjunto de departamentos',
  'Tag Set': 'Conjunto de etiquetas',

  'Please enter the WeChat API Corp ID': 'Por favor ingrese wechat api corp id',
  'Please enter the WeChat API Agent ID':
    'Por favor ingrese la identificación del agente de wechat api',
  'Please enter the WeChat API Secret': 'Por favor ingrese wechat api secreto',
  'This toUser has existed': 'Este usuario ha existido',
  'This toParty has existed': 'Este toParty ha existido',
  'This toTag has existed': 'Este toTag ha existido',

  WECOM_DESC:
    'Puede recibir notificaciones de la plataforma a través de Enterprise WeChat y debe configurar el servidor de envío de WeChat empresarial.',
  WECOM_SETTINGS_CHANGE_NEED_SAVE_TIP:
    'Su configuración corporativa actual de WeChat ha cambiado, guarde la configuración o cancele la modificación',

  Channel: 'Canal',
  'Channel Settings': 'Configuración de canal',
  'Channel Set': 'Conjunto de canales',

  'Please enter the Slack token': 'Ingrese el token de holgura',
  'Please enter a channel': 'Ingrese un canal para agregar',
  'This channel has existed': 'Este canal ha existido',
  'Please add the receiver channel': 'Por favor, agregue un canal receptor',

  SLACK_DESC:
    'Puede recibir notificaciones de la plataforma a través de Slack y debe configurar el servidor de envío de Slack.',
  SLACK_SETTINGS_CHANGE_NEED_SAVE_TIP:
    'Su configuración actual de holgura ha cambiado, guarde la configuración o cancele la modificación',

  'Webhook Settings': 'Configuración de webhook',
  'Webhook Url': 'URL del webhook',
  'Server Name': 'Nombre del servidor',
  'Root CA': 'CA raíz',
  'Client Certificate Cert': 'Certificado de certificado de cliente',
  'Client Certificate Key': 'Clave de certificado de cliente',
  'Verification Type': 'Verificar tipo',
  'Skip TLS Certification': 'Omitir la certificación TLS',
  'Please select a verification type': 'Please select a verification type',

  WEBHOOK_SETTING_DESC:
    'Puede recibir notificaciones de la plataforma a través de webhook y debe configurar el servidor de envío de webhook.',
  WEBHOOK_SETTINGS_CHANGE_NEED_SAVE_TIP:
    'Su configuración actual de webhook ha cambiado, guarde la configuración o cancele la modificación',
}
