/*
 * The MIT License
 *
 * Copyright 2017 NDCB.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
package io.github.ndcb.sitegen.model.newcore;

import com.j256.ormlite.field.DatabaseField;
import com.j256.ormlite.table.DatabaseTable;
import javafx.beans.property.ObjectProperty;
import javafx.beans.property.SimpleObjectProperty;
import javafx.beans.property.SimpleStringProperty;
import javafx.beans.property.StringProperty;

/**
 * Model of a standard tag. Used to associate similar elements based on
 * keywords.
 *
 * @author Marc-Antoine Ouimet &lt;ouimetmarcantoine@gmail.com&gt;
 */
@DatabaseTable
public class Tag extends Element {

    /**
     * The name of the database column for a tag foreign key reference.
     */
    public static final String TAG_ID_REFERENCE_COLUMN_NAME = "tag_id";

    /**
     * Model of a standard localized tag. Used to describe the content of a tag
     * mapped to a locale.
     */
    @DatabaseTable
    public static class LocalizedTag extends LocalizedElement {

        /**
         * The name of the database column for the a localized tag foreign key
         * reference.
         */
        public final static String LOCALIZED_TAG_ID_REFERENCE_COLUMN_NAME = "localized_tag_id";

        /**
         * The tag reference of this localized tag.
         */
        @DatabaseField(
                uniqueCombo = true,
                canBeNull = false,
                foreign = true,
                useGetSet = true,
                columnName = TAG_ID_REFERENCE_COLUMN_NAME
        )
        private final ObjectProperty&lt;Tag&gt; tag = new SimpleObjectProperty&lt;&gt;();

        public Tag getTag() {
            return tag.get();
        }

        public void setTag(Tag value) {
            tag.set(value);
        }

        public ObjectProperty tagProperty() {
            return tag;
        }

        /**
         * The title of this localized tag.
         */
        @DatabaseField(
                canBeNull = false,
                useGetSet = true
        )
        private final StringProperty title = new SimpleStringProperty();

        public String getTitle() {
            return title.get();
        }

        public void setTitle(String value) {
            title.set(value);
        }

        public StringProperty titleProperty() {
            return title;
        }

        /**
         * The string reference of this localized tag.
         */
        @DatabaseField(
                canBeNull = false,
                useGetSet = true
        )
        private final StringProperty reference = new SimpleStringProperty();

        public String getReference() {
            return reference.get();
        }

        public void setReference(String value) {
            reference.set(value);
        }

        public StringProperty referenceProperty() {
            return reference;
        }

        /**
         * Model of a junction between a localized tag and a content. Used to
         * associate a localized content-based description to a tag.
         */
        @DatabaseTable
        public static class LocalizedTagContentJunction extends Content {

            /**
             * The localized article of this content-article junction.
             */
            @DatabaseField(
                    uniqueCombo = true,
                    canBeNull = false,
                    foreign = true,
                    useGetSet = true,
                    columnName = LOCALIZED_TAG_ID_REFERENCE_COLUMN_NAME
            )
            private final ObjectProperty&lt;LocalizedTag&gt; localizedTag = new SimpleObjectProperty&lt;&gt;();

            public LocalizedTag getLocalizedTag() {
                return localizedTag.get();
            }

            public void setLocalizedTag(LocalizedTag value) {
                localizedTag.set(value);
            }

            public ObjectProperty localizedTagProperty() {
                return localizedTag;
            }

        }
    }

}