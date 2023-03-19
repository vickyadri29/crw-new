import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Donation from 'App/Models/Donation'

export default class DonationsController {
    /**
     * create new donation
     */
    public async add({request, response, auth}: HttpContextContract) {
        const user_id = auth.user?.id

        const { campaign_id, total } = request.body()

        try {
            const query = await Donation.create({ user_id, campaign_id, total })
            return query
        } catch (err) {
            console.log(err)
            response.internalServerError({ message: err })
        }
    }
}
