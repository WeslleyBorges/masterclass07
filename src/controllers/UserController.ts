import { Request, Response } from 'express'

import EmailService from '../services/EmailService'

const users = [
    {name: 'Weslley', email: 'weslley@se.com.br'}
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },
    async store(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({to: {name: 'Weslley', email: 'weslleyborgesdev@gmail.com'}, 
                               message: {subject: 'Aprendizado de typeScript', body: 'Ola, estou aprendendo TypeScript.', 
                                         attachments: ['cartinhas.pdf', 'planilhas.xlsx']}})
    }
}