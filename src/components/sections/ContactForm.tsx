import { useId, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail } from "lucide-react";
import { WhatsAppIcon } from "@/components/brand/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { site, whatsappUrl } from "@/config/site";

const schema = z.object({
  name: z.string().trim().min(2, "Indica tu nombre."),
  contact: z.string().trim().min(6, "Indica un correo electrónico o un teléfono para responderte."),
  subject: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Cuéntanos un poco más (mínimo 10 caracteres).").max(2000),
  privacy: z.boolean().refine((v) => v, "Debes aceptar la política de privacidad."),
});

type FormValues = z.infer<typeof schema>;

const fieldClass = "h-12 rounded-sm border-input bg-white text-base focus-visible:ring-forest";

/**
 * Formulario de contacto sin servidor: al enviarlo abre la aplicación de correo o WhatsApp
 * del usuario con el mensaje ya redactado. La web no almacena los datos.
 */
const ContactForm = ({ defaultSubject = "" }: { defaultSubject?: string }) => {
  const id = useId();
  const channel = useRef<"email" | "whatsapp">("email");
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", contact: "", subject: defaultSubject, message: "", privacy: false },
  });

  const onSubmit = (values: FormValues) => {
    const subject = values.subject ? `Consulta: ${values.subject}` : "Consulta desde la web";
    const body = `${values.message}\n\n— ${values.name}\nContacto: ${values.contact}`;
    if (channel.current === "whatsapp") {
      window.open(whatsappUrl(`Hola, Herbolarium de la Fuente. ${subject}.\n\n${body}`), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
  };

  const fieldError = (name: keyof FormValues) =>
    errors[name] ? (
      <p id={`${id}-${name}-error`} className="mt-2 text-sm text-destructive">
        {errors[name]?.message as string}
      </p>
    ) : null;

  const a11y = (name: keyof FormValues) => ({
    id: `${id}-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${id}-${name}-error` : undefined,
  });

  const labelClass = "mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-pine";

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6" aria-label="Formulario de contacto">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Nombre
          </label>
          <Input {...register("name")} {...a11y("name")} autoComplete="name" className={fieldClass} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor={`${id}-contact`} className={labelClass}>
            Correo o teléfono
          </label>
          <Input {...register("contact")} {...a11y("contact")} autoComplete="email" className={fieldClass} />
          {fieldError("contact")}
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-subject`} className={labelClass}>
          Asunto <span className="font-normal normal-case tracking-normal text-muted-foreground">(opcional)</span>
        </label>
        <Input {...register("subject")} {...a11y("subject")} className={fieldClass} />
      </div>
      <div>
        <label htmlFor={`${id}-message`} className={labelClass}>
          Mensaje
        </label>
        <Textarea
          {...register("message")}
          {...a11y("message")}
          rows={6}
          placeholder="¿Buscas un producto concreto? Cuéntanos en qué podemos ayudarte."
          className="resize-y rounded-sm border-input bg-white text-base focus-visible:ring-forest"
        />
        {fieldError("message")}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <Checkbox
            id={`${id}-privacy`}
            checked={watch("privacy")}
            onCheckedChange={(v) => setValue("privacy", v === true, { shouldValidate: true })}
            aria-invalid={errors.privacy ? true : undefined}
            aria-describedby={errors.privacy ? `${id}-privacy-error` : undefined}
            className="mt-0.5 h-5 w-5 rounded-[3px] border-forest data-[state=checked]:bg-forest"
          />
          <label htmlFor={`${id}-privacy`} className="text-sm leading-relaxed text-muted-foreground">
            He leído y acepto la{" "}
            <Link to="/politica-de-privacidad" className="link-underline text-forest">
              política de privacidad
            </Link>
            .
          </label>
        </div>
        {fieldError("privacy")}
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <Button type="submit" size="lg" className="flex-1" onClick={() => (channel.current = "whatsapp")}>
          <WhatsAppIcon />
          Enviar por WhatsApp
        </Button>
        <Button type="submit" size="lg" variant="outline" className="flex-1" onClick={() => (channel.current = "email")}>
          <Mail strokeWidth={1.6} />
          Enviar por correo
        </Button>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Al enviar se abrirá WhatsApp o tu aplicación de correo con el mensaje ya preparado. Esta web no almacena los datos
        del formulario.
      </p>
    </form>
  );
};

export default ContactForm;
