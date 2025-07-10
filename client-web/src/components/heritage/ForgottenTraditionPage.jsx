import React, { useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { TabView, TabPanel } from "primereact/tabview";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";

import { Toast } from "primereact/toast";
import { ProgressSpinner } from "primereact/progressspinner";
import PageLayout from "../layouts/PageLayout"; // Optional layout wrapper

const data = {
  "Old Cultures": [
    {
      title: "Kathputli Art",
      location: "Rajasthan",
      description: "An ancient string puppet performance deeply rooted in Indian storytelling.",
      image: "https://source.unsplash.com/400x250/?puppet,india",
    },
    {
      title: "Dhokra Craft",
      location: "Chhattisgarh",
      description: "Lost wax metal casting tradition dating back over 4000 years.",
      image: "https://source.unsplash.com/400x250/?tribal,metalwork",
    },
  ],
  "Remote Villages": [
    {
      title: "Majuli Island",
      location: "Assam",
      description: "World's largest river island with unique satriya culture.",
      image: "https://source.unsplash.com/400x250/?assam,village",
    },
    {
      title: "Malana Village",
      location: "Himachal Pradesh",
      description: "Isolated village with its own language and democracy system.",
      image: "https://source.unsplash.com/400x250/?malana,village",
    },
  ],
};

export default function ForgottenTraditionPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({ category: "Old Cultures" });
  const [loading, setLoading] = useState(false);
  const toast = useRef(null);

  const categories = Object.keys(data);
  const filteredData = data[categories[activeIndex]].filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageLayout>
      <Toast ref={toast} />

      <section className="py-10 px-5 lg:px-20 bg-yellow-50 min-h-screen">
        <h2 className="text-4xl font-bold text-center text-orange-800 mb-6">
          Forgotten Traditions
        </h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <span className="p-input-icon-left w-full md:w-1/2">
            <i className="pi pi-search" />
            <InputText
              className="w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tradition..."
            />
          </span>
        </div>

        {/* Tabs */}
        <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
          {categories.map((category, i) => (
            <TabPanel header={category} key={i}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((item, index) => (
                  <Card
                    key={index}
                    title={item.title}
                    subTitle={item.location}
                    className="shadow-lg border border-orange-200 rounded-xl overflow-hidden"
                    header={
                      <img
                        alt={item.title}
                        src={item.image}
                        className="h-48 w-full object-cover"
                      />
                    }
                  >
                    <p className="text-gray-700">{item.description}</p>
                  </Card>
                ))}
                {filteredData.length === 0 && (
                  <p className="col-span-full text-center text-gray-500 mt-4">
                    No traditions found for this search.
                  </p>
                )}
              </div>
            </TabPanel>
          ))}
        </TabView>

        {/* Why It Matters Section */}
        <section className="mt-14 p-6 bg-orange-100 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold mb-2 text-orange-900">
            Why Forgotten Traditions Matter?
          </h3>
          <p className="text-gray-700">
            Preserving traditional cultures helps us stay connected with our roots. It builds identity,
            sustains wisdom, and passes down stories and values for generations.
          </p>
        </section>

        {/* CTA - Contribute Your Story */}
        <section className="mt-10 p-8 bg-gradient-to-r from-orange-200 to-yellow-100 rounded-xl text-center shadow-lg">
          <h3 className="text-2xl font-semibold text-orange-800 mb-2">Know a Lost Tradition?</h3>
          <p className="mb-4 text-gray-700">Contribute your story and help preserve cultural heritage.</p>
          <Button
            label="Submit a Tradition"
            icon="pi pi-send"
            className="p-button-warning p-button-raised"
            onClick={() => setShowDialog(true)}
          />
        </section>

        {/* Form Dialog with Toast + Spinner */}
      <Dialog
  header="Submit a Forgotten Tradition"
  visible={showDialog}
  style={{ width: "100%", maxWidth: "500px" }}
  onHide={() => setShowDialog(false)}
  className="p-fluid rounded-2xl"
>
  {/* put the form here */}
  <form
  onSubmit={async (e) => {
    e.preventDefault();
    setLoading(true);

    const formEl = e.target;
    const formData = new FormData(formEl);

    try {
      const response = await fetch("https://formspree.io/f/xeokyowy", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        toast.current.show({
          severity: "success",
          summary: "Submitted!",
          detail: "Thank you for contributing 🎉",
          life: 3000,
        });
        formEl.reset();
        setShowDialog(false);
      } else {
        toast.current.show({
          severity: "error",
          summary: "Oops!",
          detail: "Something went wrong.",
          life: 3000,
        });
      }
    } catch (err) {
      toast.current.show({
        severity: "error",
        summary: "Network Error",
        detail: "Please try again.",
        life: 3000,
      });
    }

    setLoading(false);
  }}
  className="space-y-5 bg-white px-6 py-4 rounded-xl shadow-xl border border-orange-200"
>
  {/* Title */}
  <div>
    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
      Tradition Title <span className="text-red-500">*</span>
    </label>
    <InputText
      id="title"
      name="title"
      className="w-full p-inputtext-sm"
      placeholder="e.g., Warli Painting"
      required
    />
  </div>

  {/* Location */}
  <div>
    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
      Location <span className="text-red-500">*</span>
    </label>
    <InputText
      id="location"
      name="location"
      className="w-full p-inputtext-sm"
      placeholder="e.g., Maharashtra"
      required
    />
  </div>

  {/* Category */}
  <div>
    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
      Category
    </label>
    <Dropdown
      id="category"
      name="category"
      className="w-full"
      value={formData.category}
      options={["Old Cultures", "Remote Villages"]}
      onChange={(e) => setFormData({ ...formData, category: e.value })}
      placeholder="Select category"
    />
  </div>

  {/* Description */}
  <div>
    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
      Description <span className="text-red-500">*</span>
    </label>
    <InputTextarea
      id="description"
      name="description"
      rows={4}
      className="w-full"
      placeholder="Share brief background, story, or cultural relevance"
      required
    />
  </div>

  {/* Submit Button */}
  <div className="flex justify-end pt-2">
    <Button
      type="submit"
      label={loading ? "Submitting..." : "Submit Tradition"}
      icon={!loading ? "pi pi-send" : null}
      disabled={loading}
      className="bg-orange-500 border-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300"
    >
      {loading && (
        <ProgressSpinner
          style={{ width: "18px", height: "18px" }}
          strokeWidth="4"
        />
      )}
    </Button>
  </div>
</form>

</Dialog>

      </section>
    </PageLayout>
  );
}
