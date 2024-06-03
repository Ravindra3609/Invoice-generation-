import { useState, useEffect, Fragment } from "react";
import Head from "next/head";

import {
  Container,
  TextInput,
  Button,
  SimpleGrid,
  Title,
  Text,
  Divider,
  Box,
  NumberInput,
} from "@mantine/core";

import { useForm, formList } from "@mantine/form";

import { DatePicker } from "@mantine/dates";
import PDF from "../components/PDF";

const Create = () => {
  const [pdfData, setPdfData] = useState({
    invoiceName: "",
    img: "",
    date: new Date(),
    place: "",
    fromName: "",
    fromFirm: "",
    fromStreet: "",
    fromCity: "",
    fromPIB: "",
    fromAccount: "",
    toEmail: "",
    toName: "",
    toAddress: "",
    toCity: "",
    toPIB: "",
    toAccount: "",
    invoiceData: [],
  });

  const form = useForm({
    initialValues: {
      invoiceName: "",
      img: "",
      date: new Date(),
      place: "",
      fromName: "",
      fromFirm: "",
      fromStreet: "",
      fromCity: "",
      fromPIB: "",
      fromAccount: "",
      toEmail: "",
      toName: "",
      toAddress: "",
      toCity: "",
      toPIB: "",
      toAccount: "",
      invoiceData: formList([]),
    },
  });

  const handleFormSubmit = (values) => {
    setPdfData(values);
  };

  useEffect(() => {
    form.addListItem("invoiceData", {
      serviceType: "",
      unit: 0,
      amount: 0,
      price: 0,
      total: 0,
    });
  },);

  return (
    <Container size="md">
      <Head>
        <title>Create Invoice</title>
        <meta
          name="description"
          content="Fill out the fields and create your invoice."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Text color="yellow" size="xl" weight={700} style={{ fontSize: 48 }}>
        Invoice Generation
      </Text>

      <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
        <Box my={12}>
          <Text color="green" size="xs" weight={300} style={{ fontSize: 28 }}>
            Business Details
          </Text>
          <Divider />
        </Box>

        <TextInput
          label="Market Name"
          placeholder="Enter your market"
          {...form.getInputProps("invoiceName")}
        />

        <SimpleGrid
          cols={2}
          my={12}
          spacing="lg"
          breakpoints={[
            { maxWidth: 755, cols: 2, spacing: "md" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          <DatePicker label="Invoice Date" {...form.getInputProps("date")} />

          <TextInput
            label="Location"
            placeholder="Hyderabad"
            {...form.getInputProps("place")}
          />

          <TextInput
            label="From"
            placeholder="Name of the business man"
            {...form.getInputProps("fromName")}
          />

          <TextInput
            label="Firm"
            placeholder="Firm"
            {...form.getInputProps("fromFirm")}
          />

          <TextInput
            label="Street"
            placeholder="Enter your street"
            {...form.getInputProps("fromStreet")}
          />

          <TextInput
            label="City"
            placeholder="Hyderabad"
            {...form.getInputProps("fromCity")}
          />

          <TextInput
            label="PIB"
            placeholder="Enter number"
            {...form.getInputProps("fromPIB")}
          />

          <TextInput
            label="Account number"
            placeholder="Enter number"
            {...form.getInputProps("fromAccount")}
          />
        </SimpleGrid>
        <Divider />
        <Divider />
        <Divider />

        <Box my={12}>
          <Text color="green" size="xs" weight={300} style={{ fontSize: 28 }}>
            Customer Details
          </Text>
          <Divider />
        </Box>

        <SimpleGrid
          cols={2}
          my={12}
          spacing="lg"
          breakpoints={[
            { maxWidth: 755, cols: 2, spacing: "md" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          <TextInput
            label="Email"
            placeholder="Your email"
            {...form.getInputProps("toEmail")}
          />

          <TextInput
            label="Name"
            placeholder="Enter customer name"
            {...form.getInputProps("toName")}
          />

          <TextInput
            label="Address"
            placeholder="Enter your address"
            {...form.getInputProps("toAddress")}
          />

          <TextInput
            label="City"
            placeholder="Bangalore"
            {...form.getInputProps("toCity")}
          />

          <TextInput
            label="PIB"
            placeholder="Enter number"
            {...form.getInputProps("toPIB")}
          />

          <TextInput
            label="Account"
            placeholder="Enter account number"
            {...form.getInputProps("toAccount")}
          />
        </SimpleGrid>

        <Divider my={12} />

        <SimpleGrid
          cols={5}
          my={12}
          spacing="lg"
          breakpoints={[
            { maxWidth: 755, cols: 5, spacing: "md" },
            { maxWidth: 600, cols: 1, spacing: "sm" },
          ]}
        >
          {form.values.invoiceData.map((_, index) => {
            return (
              <Fragment key={index}>
                <TextInput
                  label="Service Type"
                  placeholder="Online"
                  {...form.getListInputProps(
                    "invoiceData",
                    index,
                    "serviceType"
                  )}
                />

                <NumberInput
                  label="Unit"
                  placeholder="1 ton"
                  {...form.getListInputProps("invoiceData", index, "unit")}
                />

                <NumberInput
                  label="Amount"
                  placeholder="12"
                  {...form.getListInputProps("invoiceData", index, "amount")}
                />

                <NumberInput
                  label="Price"
                  placeholder="Enter the price of the item"
                  {...form.getListInputProps("invoiceData", index, "price")}
                />

                <NumberInput
                  label="Total"
                  placeholder="6000"
                  {...form.getListInputProps("invoiceData", index, "total")}
                />
              </Fragment>
            );
          })}
        </SimpleGrid>
        <Button
          fullWidth
          variant="light"
          onClick={() => {
            form.addListItem("invoiceData", {
              serviceType: "",
              unit: 0,
              amount: 0,
              price: 0,
              total: 0,
            });
          }}
        >
          Add another price
        </Button>

        <Button fullWidth type="submit" size="lg" my={18}>
          Create
        </Button>
      </form>

      {pdfData.invoiceName && <PDF invoice={pdfData} />}
    </Container>
  );
};

export default Create;
