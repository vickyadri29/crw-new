import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";
import Campaign from "App/Models/Campaign";

export default class CampaignsController {
  /**
   * get list campaign
   */
  public async fetch({}: HttpContextContract) {
    const query = await Campaign.query().preload("donations");

    const campaign = query.map((x) => {
      const curr_donation = x.donations.reduce(
        (prev, curr) => prev + curr.total,
        0
      );

      return {
        ...x.$original,
        curr_donation,
        is_completed: curr_donation >= x.target,
      };
    });
    return campaign;
  }

  /**
   * create new campaign
   */
  public async add({ request, response, auth }: HttpContextContract) {
    const user_id = auth.user?.id;

    const schemaValidator = schema.create({
      title: schema.string(),
      content: schema.string(),
      target: schema.number(),
      target_date: schema.string(),
    });

    const { title, content, target, target_date } = await request.validate({
      schema: schemaValidator,
    });
    try {
      const query = await Campaign.create({
        user_id,
        title,
        content,
        target,
        target_date,
      });
      return query;
    } catch (err) {
      console.log(err);
      response.internalServerError({ message: err });
    }
  }

  /**
   * view details campaigns
   */
  public async fetchId({ request, response }: HttpContextContract) {
    const id = request.param("id");

    const query = await Campaign.query()
      .where("id", id)
      .preload("donations")
      .first();

    if (!query) {
      response.notFound({ message: "campaign not found" });
      return;
    }

    const curr_donation = query.donations.reduce(
      (prev, curr) => prev + curr.total,
      0
    );

    return {
      ...query.$original,
      curr_donation,
      is_completed: curr_donation >= query.target,
    };
    return query;
  }
}
